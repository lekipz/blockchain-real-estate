import { useDrizzle } from '../drizzle';
import { useCacheCall } from '../drizzle/utils/useCacheCall';
import { useEffect, useRef, useState } from 'react';
import { fetchTokenMetadata } from './service';

// Loads and caches all real estates.
// DO NOT use this outside RealEstates context provider.
export function useLoadRealEstates() {
  const { drizzle, drizzleState } = useDrizzle();
  const totalSupply = useCacheCall('totalSupply');
  const [tokenIdKeys, setTokenIdKeys] = useState([]);
  const [tokenURIKeys, setTokenURIKeys] = useState([]);
  const [tokenDataKeys, setTokenDataKeys] = useState([]);
  const [tokenOwnerKeys, setTokenOwnerKeys] = useState([]);
  const metadataPromises = useRef([]);
  const [realEstatesMetadata, setRealEstatesMetadata] = useState([]);

  // Load token IDs when totalSupply is defined.
  useEffect(() => {
    if (totalSupply !== null) {
      setTokenIdKeys(Array(+totalSupply)
        .fill(null)
        .map((_, idx) => drizzle.contracts.SupRealEstate.methods.tokenByIndex.cacheCall(idx)));
      if (realEstatesMetadata.length === 0 && totalSupply > 0) {
        setRealEstatesMetadata(Array(+totalSupply).fill(null));
      }
    }
  }, [totalSupply]);
  const tokenIds = tokenIdKeys.map(tokenKey => drizzleState.contracts.SupRealEstate.tokenByIndex[tokenKey]?.value || null);

  // Load token URIs for each token ID
  useEffect(() => {
    if (tokenIds.length > 0) {
      setTokenURIKeys(tokenIds.map(tokenId => {
        if (tokenId === null) {
          return null;
        }
        return drizzle.contracts.SupRealEstate.methods.tokenURI.cacheCall(tokenId);
      }));
      setTokenDataKeys(tokenIds.map(tokenId => {
        if (tokenId === null) {
          return null;
        }
        return drizzle.contracts.SupRealEstate.methods.tokenDataOf.cacheCall(tokenId);
      }));
      setTokenOwnerKeys(tokenIds.map(tokenId => {
        if (tokenId === null) {
          return null;
        }
        return drizzle.contracts.SupRealEstate.methods.ownerOf.cacheCall(tokenId);
      }));
    }
  }, [JSON.stringify(tokenIds)]);
  const tokenURIs = tokenURIKeys.map(tokenURIKey => drizzleState.contracts.SupRealEstate.tokenURI[tokenURIKey]?.value || null);
  const tokenData = tokenDataKeys.map(tokenDataKey => drizzleState.contracts.SupRealEstate.tokenDataOf[tokenDataKey]?.value || null);
  const areTokensOwned = tokenOwnerKeys.map(tokenOwnerKey => drizzleState.contracts.SupRealEstate.ownerOf[tokenOwnerKey]?.value === drizzleState.accounts[0]);

  // Load JSON metadata
  useEffect(() => {
    if (tokenURIs.length > 0) {
      metadataPromises.current = tokenURIs.map((tokenURI, idx) => {
        if (tokenURI === null) { // Token metadata URI still loading
          return null;
        }
        if (metadataPromises.current[idx]) { // Token metadata already fetching
          return metadataPromises.current[idx];
        }

        // Start fetching metadata when URI is available.
        return fetchTokenMetadata(tokenURI)
          .then(metaData => setRealEstatesMetadata(re => {
            const newRealEstates = re.slice();
            newRealEstates[idx] = {
              ...metaData,
              tokenId: +tokenIds[idx],
              images: metaData.images.map(imgHash => `https://dweb.link/ipfs/${imgHash}`)
            };
            return newRealEstates;
          }));
      });
    }
  }, [JSON.stringify(tokenURIs)]);

  return !totalSupply ? null : realEstatesMetadata.map((re, idx) => ({
    ...re,
    price: tokenData[idx] ? +drizzle.web3.utils.fromWei(tokenData[idx].weiPrice) : null,
    onSale: tokenData[idx]?.onSale ?? false,
    isOwned: areTokensOwned[idx] ?? false
  }));
}
