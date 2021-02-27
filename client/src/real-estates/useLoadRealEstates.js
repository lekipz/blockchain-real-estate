import { useDrizzle } from '../drizzle';
import { useCacheCall } from '../drizzle/utils/useCacheCall';
import { useEffect, useMemo, useState } from 'react';
import { fetchTokenMetadata } from './service';

// Loads and caches all real estates.
// DO NOT use this outside RealEstates context provider.
export function useLoadRealEstates() {
  const { drizzle, drizzleState } = useDrizzle();
  const totalSupply = useCacheCall('totalSupply');
  const [tokenKeys, setTokenKeys] = useState([]);
  const [tokenURIKeys, setTokenURIKeys] = useState([]);
  const [tokenDataKeys, setTokenDataKeys] = useState([]);
  const [tokenOwnerKeys, setTokenOwnerKeys] = useState([]);
  const [realEstatePromises, setRealEstatePromises] = useState([]);
  const [realEstates, setRealEstates] = useState([]);

  const tokenIds = useMemo(() => {
    return tokenKeys.map(tokenKey => drizzleState.contracts.SupRealEstate.tokenByIndex[tokenKey]?.value ?? null);
  }, [tokenKeys, drizzleState.contracts.SupRealEstate.tokenByIndex]);

  const tokenURIs = useMemo(() => {
    return tokenURIKeys.map(tokenURIKey => drizzleState.contracts.SupRealEstate.tokenURI[tokenURIKey]?.value ?? null);
  }, [tokenURIKeys, drizzleState.contracts.SupRealEstate.tokenURI]);

  const tokenData = useMemo(() => {
    return tokenDataKeys.map(tokenDataKey => drizzleState.contracts.SupRealEstate.tokenDataOf[tokenDataKey]?.value ?? null);
  }, [tokenDataKeys, drizzleState.contracts.SupRealEstate.tokenDataOf]);

  const areTokensOwned = useMemo(() => {
    return tokenOwnerKeys.map(tokenOwnerKey => drizzleState.contracts.SupRealEstate.ownerOf[tokenOwnerKey]?.value === drizzleState.accounts[0]);
  }, [tokenOwnerKeys, drizzleState.contracts.SupRealEstate.ownerOf]);

  // Load token IDs when totalSupply is defined.
  useEffect(() => {
    if (totalSupply !== null) {
      const tk = Array(+totalSupply)
        .fill(null)
        .map((_, idx) => drizzle.contracts.SupRealEstate.methods.tokenByIndex.cacheCall(idx));
      setTokenKeys(tk);
      if (realEstates.length === 0 && totalSupply > 0) {
        setRealEstates(Array(totalSupply).fill(null));
      }
    }
  }, [totalSupply, drizzle.contracts.SupRealEstate.methods.tokenByIndex]);

  // Load token URIs for each token ID
  useEffect(() => {
    if (tokenIds.length > 0) {
      const tk = tokenIds.map((tokenId, idx) => {
        if (tokenId === null) {
          return null;
        }
        return tokenURIKeys[idx] ?? drizzle.contracts.SupRealEstate.methods.tokenURI.cacheCall(tokenId);
      });
      setTokenURIKeys(tk);
    }
  }, [tokenIds, drizzle.contracts.SupRealEstate.methods.tokenURI]);

  // Load token data for each token ID
  useEffect(() => {
    if (tokenIds.length > 0) {
      const tk = tokenIds.map((tokenId, idx) => {
        if (tokenId === null) {
          return null;
        }
        return tokenDataKeys[idx] ?? drizzle.contracts.SupRealEstate.methods.tokenDataOf.cacheCall(tokenId);
      });
      setTokenDataKeys(tk);
    }
  }, [tokenIds, drizzle.contracts.SupRealEstate.methods.tokenDataOf]);

  // Load token owner for each token ID
  useEffect(() => {
    if (tokenIds.length > 0) {
      const tk = tokenIds.map((tokenId, idx) => {
        if (tokenId === null) {
          return null;
        }
        return tokenOwnerKeys[idx] ?? drizzle.contracts.SupRealEstate.methods.ownerOf.cacheCall(tokenId);
      });
      setTokenOwnerKeys(tk);
    }
  }, [tokenIds, drizzle.contracts.SupRealEstate.methods.ownerOf]);

  // Load JSON metadata
  useEffect(() => {
    if (tokenURIs.length > 0) {
      const promises = tokenURIs.map((tokenURI, idx) => {
        if (tokenURI === null) { // Token metadata URI still loading
          return null;
        }
        if (realEstatePromises[idx]) { // Token metadata already fetching
          return realEstatePromises[idx];
        }

        // Set to `null` to provide a loading state
        setRealEstates(re => {
          const newRealEstates = re.slice();
          newRealEstates[idx] = null;
          return newRealEstates;
        });

        // Start fetching metadata when URI is available.
        return fetchTokenMetadata(tokenURI)
          .then(metaData => setRealEstates(re => {
            const newRealEstates = re.slice();
            newRealEstates[idx] = {
              ...metaData,
              tokenId: +tokenIds[idx],
              images: metaData.images.map(imgHash => `https://dweb.link/ipfs/${imgHash}`)
            };
            return newRealEstates;
          }));
      });
      setRealEstatePromises(promises);
    }
  }, [tokenURIs]);

  return !totalSupply ? null : realEstates.map((re, idx) => ({
    ...re,
    price: tokenData[idx] ? +drizzle.web3.utils.fromWei(tokenData[idx].weiPrice) : null,
    onSale: tokenData[idx]?.onSale ?? false,
    isOwned: areTokensOwned[idx] ?? false
  }));
}
