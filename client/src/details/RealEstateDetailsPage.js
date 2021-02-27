import { useParams } from 'react-router-dom';
import { useRealEstate } from '../real-estates';
import ScreenSpinner from '../common/ui/ScreenSpinner';
import RealEstateDetails from './RealEstateDetails';

export default function RealEstateDetailsPage() {
  const { id } = useParams();
  const realEstate = useRealEstate(+id);

  if (!realEstate) {
    return <ScreenSpinner label="Chargement du bien..."/>;
  }

  return (
    <div className="px-4">
      <RealEstateDetails realEstate={realEstate}/>
    </div>
  );
}
