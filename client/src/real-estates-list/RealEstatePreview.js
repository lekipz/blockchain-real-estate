import classes from './cssModules/RealEstatePreview.module.css';
import Loader from 'react-loader-spinner';
import { formatEth } from '../common/utils';

const PaddedParagraph = ({ children }) => (
  <p className="pt-3">
    {children}
  </p>
);

const BoldLabel = ({ children }) => (
  <span className="font-bold">{children}</span>
);

export default function RealEstatePreview({ realEstate }) {
  return (
    <div className={classes.realEstatePreview}>
      <PaddedParagraph>
        <BoldLabel>Nom : </BoldLabel>
        {realEstate.name}
      </PaddedParagraph>
      <PaddedParagraph>
        <BoldLabel>Prix : </BoldLabel>
        {realEstate.price ? `${formatEth(realEstate.price)} ETH` : 'Chargement...'}
      </PaddedParagraph>
      <PaddedParagraph>
        <BoldLabel>Adresse : </BoldLabel>
        {realEstate.address}
      </PaddedParagraph>
      {realEstate.images?.length > 0 ? (
        <img className="object-contain h-40 pt-3" src={realEstate.images[0]} alt={realEstate.name}/>
      ) : (
        <Loader visible type="Oval" color="#66C"/>
      )}
    </div>
  );
}
