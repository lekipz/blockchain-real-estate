import { useState } from 'react';
import RealEstatePreview from "./RealEstatePreview";

export default function RealEstateListPage() {

  const REAL_ESTATES = [
      {
        tokenId: 1,
        name: 'Le uc de Raumé',
        description: 'Un snack',
        price: 3.14,
        address: 'fjdshfudshfsdjnfèdshfjii',
        images: ['https://assets.change.org/photos/4/ji/md/eIjImDqzbMmvALO-800x450-noPad.jpg?1539879623'],
        onSale: true
      },
      {
        tokenId: 2,
        name: 'Alick',
        description: 'Un rebeu',
        price: 0.1,
        address: 'fjdsjifhdsuifhsdijnfdusihfsd',
        images: ['https://pbs.twimg.com/profile_images/528490504/Alick_t_te_seule_400x400.jpg'],
        onSale: true
      },
      {
        tokenId: 3,
        name: 'Magicarpe',
        description: 'Carpe carpe',
        price: 900,
        address: 'fjdsjifhdsuifhsdijnfdusihfsd',
        images: ['https://img.pokemondb.net/artwork/large/magikarp.jpg'],
        onSale: true
      },
      {
        tokenId: 4,
        name: 'Magicarpe',
        description: 'Carpe carpe',
        price: 900,
        address: 'fjdsjifhdsuifhsdijnfdusihfsd',
        images: ['https://img.pokemondb.net/artwork/large/magikarp.jpg'],
        onSale: true
      },
      {
        tokenId: 5,
        name: 'Magicarpe',
        description: 'Carpe carpe',
        price: 900,
        address: 'fjdsjifhdsuifhsdijnfdusihfsd',
        images: ['https://img.pokemondb.net/artwork/large/magikarp.jpg'],
        onSale: true
      },
      {
        tokenId: 6,
        name: 'Magicarpe',
        description: 'Carpe carpe',
        price: 900,
        address: 'fjdsjifhdsuifhsdijnfdusihfsd',
        images: ['https://img.pokemondb.net/artwork/large/magikarp.jpg'],
        onSale: true
      },
      {
        tokenId: 7,
        name: 'Magicarpe',
        description: 'Carpe carpe',
        price: 900,
        address: 'fjdsjifhdsuifhsdijnfdusihfsd',
        images: ['https://img.pokemondb.net/artwork/large/magikarp.jpg'],
        onSale: true
      },
      {
        tokenId: 8,
        name: 'Magicarpe',
        description: 'Carpe carpe',
        price: 900,
        address: 'fjdsjifhdsuifhsdijnfdusihfsd',
        images: ['https://img.pokemondb.net/artwork/large/magikarp.jpg'],
        onSale: true
      },
      {
        tokenId: 9,
        name: 'Magicarpe',
        description: 'Carpe carpe',
        price: 900,
        address: 'fjdsjifhdsuifhsdijnfdusihfsd',
        images: ['https://img.pokemondb.net/artwork/large/magikarp.jpg'],
        onSale: true
      },
      {
        tokenId: 10,
        name: 'Magicarpe',
        description: 'Carpe carpe',
        price: 900,
        address: 'fjdsjifhdsuifhsdijnfdusihfsd',
        images: ['https://img.pokemondb.net/artwork/large/magikarp.jpg'],
        onSale: true
      },
      {
        tokenId: 11,
        name: 'Magicarpe',
        description: 'Carpe carpe',
        price: 900,
        address: 'fjdsjifhdsuifhsdijnfdusihfsd',
        images: ['https://img.pokemondb.net/artwork/large/magikarp.jpg'],
        onSale: true
      }
  ]

  const [realEstateList, setRealEstateList] = useState(REAL_ESTATES)

  return (
    <div className="flex flex-wrap flex-col items-center">
      <h1 className="text-5xl font-bold mt-14">BIENS EN VENTE</h1>
      <div className="flex flex-wrap justify-center mt-28 m-72">
        {realEstateList.map((realEstate) => (<RealEstatePreview realEstate={realEstate} key={realEstate.tokenId}/>))}
      </div>
    </div>
  )
}
