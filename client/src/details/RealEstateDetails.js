import classes from './RealEstateDetails.module.css';
import DemoCarousel from '../common/ui/Carousel';
import { formatEth } from '../common/utils';
import Button from '../common/ui/Button';

export default function RealEstateDetails({ realEstate, onBuy, onToggleSale, loading }) {
  const handleToggleSale = () => void onToggleSale(!realEstate.onSale);

  return (
    <div className="flex flex-nowrap justify-between">
      <div className={classes.informations}>
        <h2 className="text-3xl mb-2 text-center">{realEstate.name}</h2>
        <div className="mt-4 mb-3 border rounded border-blue-800 bg-blue-200 p-2">
          {realEstate.isOwned ?
            'Vous possédez déjà ce bien.' :
            realEstate.onSale ?
              'Ce bien est actuellement en vente. Vous pouvez l\'acheter à l\'aide du bouton ci-dessous.' :
              'Ce bien n\'est pas à vendre. Vous pouvez simplement consulter ses informations sur cette page.'
          }
        </div>
        <section className="md:max-w-6xl mx-auto pt-4 px-4">
          <strong>En vente: </strong>
          {realEstate.onSale ? 'Oui' : 'Non'}
        </section>
        <section className="md:max-w-6xl mx-auto pt-4 px-4">
          <strong>Prix: </strong>
          {realEstate.price ? formatEth(realEstate.price) : 'Chargement...'} ETH
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
        <div className="flex flex-row-reverse pt-8">
          {!realEstate.isOwned && realEstate.onSale && (
            <Button type="button" onClick={onBuy} disabled={loading}>
              {loading ? 'Achat en cours...' : 'Acheter'}
            </Button>
          )}
          {realEstate.isOwned && (
            <Button type="button" onClick={handleToggleSale} disabled={loading}>
              {realEstate.onSale ?
                (loading ? 'Retirement...' : 'Retirer de la vente') :
                (loading ? 'Mise en vente' : 'Mettre en vente')}
            </Button>
          )}
        </div>
      </div>
      <DemoCarousel pictures={realEstate.images}/>
    </div>
  );
}
