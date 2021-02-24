import { useState } from 'react';
import RealEstatePreview from "./RealEstatePreview";

export default function RealEstateListPage() {

  const getRealEstateList = () => {
    return [
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
      }
    ]
  }

  const [realEstateList, setRealEstateList] = useState(getRealEstateList())

  const realEstateComponents = realEstateList.map((realEstate) => <RealEstatePreview realEstate={realEstate} key={realEstate.tokenId}/>)

  return (
    <div>
      <p>Coucou c'est la page de listing des produits</p>
      {realEstateComponents}
    </div>
  )
}
