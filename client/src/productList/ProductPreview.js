export default function ProductPreview(props) {
  return (
    <div>
      <p>Nom: {props.product.name}</p>
      <p>Description: {props.product.description}</p>
      <p>Prix: {props.product.price}</p>
      <p>Adresse: {props.product.address}</p>
      <img src={props.product.images[0]}/>
    </div>
  )
}
