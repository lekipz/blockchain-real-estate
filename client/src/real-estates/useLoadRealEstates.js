import {useDrizzle} from '../drizzle';
import {useCacheCall} from '../drizzle/utils/useCacheCall';
import {useEffect, useMemo, useState} from 'react';
import {fetchTokenMetadata} from './service';

// Loads and caches all real estates.
// DO NOT use this outside RealEstates context provider.
export function useLoadRealEstates() {
    const {drizzle, drizzleState} = useDrizzle();
    const totalSupply = useCacheCall('totalSupply');
    const [tokenKeys, setTokenKeys] = useState([]);
    const [tokenURIKeys, setTokenURIKeys] = useState([]);
    const [realEstatePromises, setRealEstatePromises] = useState([]);
    const [realEstates, setRealEstates] = useState([]);

    const tokenIds = useMemo(() => {
        return tokenKeys.map(tokenKey => drizzleState.contracts.RealEstate.tokenByIndex[tokenKey]?.value ?? null);
    }, [tokenKeys, drizzleState.contracts.RealEstate.tokenByIndex]);

    const tokenURIs = useMemo(() => {
        return tokenURIKeys.map(tokenURIKey => drizzleState.contracts.RealEstate.tokenURI[tokenURIKey]?.value ?? null);
    }, [tokenURIKeys, drizzleState.contracts.RealEstate.tokenURI]);

    // Load token IDs when totalSupply is defined.
    useEffect(() => {
        if (totalSupply !== null) {
            const tk = Array(+totalSupply)
                .fill(null)
                .map((_, idx) => drizzle.contracts.RealEstate.methods.tokenByIndex.cacheCall(idx));
            setTokenKeys(tk);
            if (realEstates.length === 0) {
                setRealEstates(Array(totalSupply).fill(null));
            }
        }
    }, [totalSupply]);

    // Load token URIs for each token ID
    useEffect(() => {
        if (tokenIds.length > 0) {
            const tk = tokenIds.map((tokenId, idx) => {
                if (tokenId === null) {
                    return null;
                }
                return tokenURIKeys[idx] ?? drizzle.contracts.RealEstate.methods.tokenURI.cacheCall(tokenId);
            });
            setTokenURIKeys(tk);
        }
    }, [tokenIds]);

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

    return totalSupply ? realEstates : null;
}
