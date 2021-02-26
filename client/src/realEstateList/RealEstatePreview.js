import classes from './cssModules/RealEstatePreview.module.css'

export default function RealEstatePreview({ realEstate }) {

  const PaddedParagraph = ({children}) => (
    <p className="pt-3">
      {children}
    </p>
  )

  return (
    <div className={classes.realEstatePreview}>
      <PaddedParagraph><span className="font-bold">Nom: </span> {realEstate.name}</PaddedParagraph>
      <PaddedParagraph><span className="font-bold">Description:</span> {realEstate.description.slice(0,150)+'...'}</PaddedParagraph>
      <PaddedParagraph><span className="font-bold">Prix:</span> {realEstate.price}</PaddedParagraph>
      <PaddedParagraph><span className="font-bold">Adresse:</span> {realEstate.address}</PaddedParagraph>
      <img className="object-contain h-40 pt-3" src={realEstate.images[0]}/>
    </div>
  )
}
