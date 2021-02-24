import classes from './cssModules/RealEstatePreview.module.css'

export default function RealEstatePreview({ realEstate }) {

  return (
    <div className={classes.realEstatePreview}>
      <p><span className="font-bold">Nom: </span> {realEstate.name}</p>
      <p><span className="font-bold">Description:</span> {realEstate.description.slice(0,150)+'...'}</p>
      <p><span className="font-bold">Prix:</span> {realEstate.price}</p>
      <p><span className="font-bold">Adresse:</span> {realEstate.address}</p>
      <img className="object-contain h-40 pt-3" src={realEstate.images[0]}/>
    </div>
  )
}
