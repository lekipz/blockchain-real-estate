import classes from './RealEstatePreview.module.css';
import Loader from 'react-loader-spinner';
import { formatEth } from '../utils';
import { useHistory } from 'react-router-dom';

const PaddedParagraph = ({ children }) => (
  <p className="pt-3">
    {children}
  </p>
);

const BoldLabel = ({ children }) => (
  <span className="font-bold">{children}</span>
);

export default function RealEstatePreview({ realEstate }) {
  const history = useHistory()

  return (
    <div className={classes.realEstatePreview} onClick={() => history.push(`/real-estates/${realEstate.tokenId}`)}>
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
