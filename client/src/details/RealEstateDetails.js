import classes from './RealEstateDetails.module.css';
import DemoCarousel from '../common/ui/Carousel';
import { formatEth } from '../common/utils';
import Button from '../common/ui/Button';

export default function RealEstateDetails({ realEstate, onBuy, loading }) {
  return (
    <div className="flex flex-nowrap justify-between">
      <div className={classes.informations}>
        <h2 className="text-3xl mb-2 text-center">{realEstate.name}</h2>
        <section className="md:max-w-6xl mx-auto pt-4 px-4">
          <strong>Prix: </strong>
          {formatEth(realEstate.price)} ETH
        </section>
        <section className="md:max-w-6xl mx-auto pt-4 px-4">
          <strong>Localisation: </strong>
          {realEstate.address}
        </section>
        {realEstate.description && (
          <section className="md:max-w-6xl mx-auto pt-4 px-4">
            <strong>Description: </strong>
            <p className="px-4 pt-2 text-sm">
              {realEstate.description}
            </p>
          </section>
        )}
        {!realEstate.isOwned && realEstate.onSale && (
          <div className="flex flex-row-reverse pt-8">
            <Button type="button" onClick={onBuy} disabled={loading}>
              {loading ? 'Achat en cours...' : 'Acheter'}
            </Button>
          </div>
        )}
      </div>
      <DemoCarousel pictures={realEstate.images}/>
    </div>
  );
}
