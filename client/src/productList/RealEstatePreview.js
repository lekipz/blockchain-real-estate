import classes from './cssModules/RealEstatePreview.module.css'

export default function RealEstatePreview({ realEstate }) {
  return (
    <div className={classes.realEstatePreview}>
      <p>Nom: {realEstate.name}</p>
      <p>Description: {realEstate.description}</p>
      <p>Prix: {realEstate.price}</p>
      <p>Adresse: {realEstate.address}</p>
      <img className="object-fill h-40" src={realEstate.images[0]}/>
    </div>
  )
}