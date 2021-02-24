export default function RealEstatePreview(props) {
  return (
    <div>
      <p>Nom: {props.realEstate.name}</p>
      <p>Description: {props.realEstate.description}</p>
      <p>Prix: {props.realEstate.price}</p>
      <p>Adresse: {props.realEstate.address}</p>
      <img src={props.realEstate.images[0]}/>
    </div>
  )
}
