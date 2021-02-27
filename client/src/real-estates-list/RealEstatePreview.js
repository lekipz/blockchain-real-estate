import classes from './cssModules/RealEstatePreview.module.css'
import Loader from "react-loader-spinner";

const PaddedParagraph = ({children}) => (
  <p className="pt-3">
    {children}
  </p>
)

const BoldLabel = ({children}) => (
  <span className="font-bold">{children}</span>
)

export default function RealEstatePreview({ realEstate }) {

  if(!realEstate.description && realEstate.images.length > 0) {
    return (
      <div className={classes.realEstatePreviewLoading}>
        <Loader visible type="Oval" color="#66C"/>
      </div>
    )
  }

  return (
    <div className={classes.realEstatePreview}>
      <PaddedParagraph><BoldLabel>Nom: </BoldLabel> {realEstate.name}</PaddedParagraph>
      <PaddedParagraph><BoldLabel className="font-bold">Description:</BoldLabel> {realEstate.description.slice(0,150)+'...'}</PaddedParagraph>
      <PaddedParagraph><BoldLabel className="font-bold">Prix:</BoldLabel> {realEstate.price}</PaddedParagraph>
      <PaddedParagraph><BoldLabel className="font-bold">Adresse:</BoldLabel> {realEstate.address}</PaddedParagraph>
      <img className="object-contain h-40 pt-3" src={realEstate.images[0]}/>
    </div>
  )
}
