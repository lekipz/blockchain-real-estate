import classes from './cssModules/RealEstatePreview.module.css'
import Loader from "react-loader-spinner";

const PaddedParagraph = ({children}) => (
  <p className="pt-3">
    {children}
  </p>
)

export default function RealEstatePreview({ realEstate }) {

  if(realEstate.description && realEstate.images.length > 0) {
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

  return (
    <div className={classes.realEstatePreviewLoading}>
      <Loader visible type="Oval" color="#66C"/>
    </div>
  )
}
