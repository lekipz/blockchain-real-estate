import { useState } from 'react';
import ProductPreview from "./ProductPreview";

export default function ProductListPage() {

  const getProductList = () => {
    return [
      {
        id: 1,
        name: 'Le uc de Raumé',
        description: 'Un snack',
        price: 3.14,
        address: 'fjdshfudshfsdjnfèdshfjii',
        images: ['https://assets.change.org/photos/4/ji/md/eIjImDqzbMmvALO-800x450-noPad.jpg?1539879623'],
        inSold: true
      },
      {
        id: 2,
        name: 'Alick',
        description: 'Un rebeu',
        price: 0.1,
        address: 'fjdsjifhdsuifhsdijnfdusihfsd',
        images: ['https://pbs.twimg.com/profile_images/528490504/Alick_t_te_seule_400x400.jpg'],
        inSold: true
      }
    ]
  }

  const [productList, setProductList] = useState(getProductList())

  const listProduct = productList.map((product) => <ProductPreview product={product} key={product.id}/>)

  return (
    <div>
      <p>Coucou c'est la page de listing des produits</p>
      {listProduct}
    </div>
  )
}
