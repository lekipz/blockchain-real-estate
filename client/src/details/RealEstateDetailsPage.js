import { useParams } from 'react-router-dom';
import { useRealEstate } from '../real-estates';
import ScreenSpinner from '../common/ui/ScreenSpinner';
import RealEstateDetails from './RealEstateDetails';
import { useCacheSend } from '../drizzle/utils/useCacheSend';
import { useDrizzle } from '../drizzle';

export default function RealEstateDetailsPage() {
  const { id } = useParams();
  const realEstate = useRealEstate(+id);
  const { drizzle, drizzleState } = useDrizzle();
  const { sendTransaction: buy, status } = useCacheSend('buy');

  if (!realEstate) {
    return <ScreenSpinner label="Chargement du bien..."/>;
  }

  const handleBuy = () => {
    buy(realEstate.tokenId, {
      from: drizzleState.accounts[0],
      value: drizzle.web3.utils.toWei(realEstate.price.toString())
    });
  };

  return (
    <div className="px-4">
      <RealEstateDetails realEstate={realEstate}
                         onBuy={handleBuy}
                         loading={status === 'loading'}/>
    </div>
  );
}
