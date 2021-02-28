import { useRealEstates } from '../real-estates';
import RealEstateList from "../common/ui/RealEstateList";

export default function MySalesPage() {
  const realEstates = useRealEstates()

  if(!realEstates?.length > 0) {
    return (<p>Chargement...</p>)
  } else if (!realEstates.filter(re => !!re?.isOwned).length > 0) {
    return(<p>Vous n'avez aucun bien en vente pour le moment</p>)
  }

  return (
    <div className="flex flex-wrap flex-col items-center">
      <h1 className="text-5xl font-bold mt-14">MES BIENS EN VENTE</h1>
      <RealEstateList reList={realEstates.filter(re => !!re?.isOwned)}/>
    </div>
  )
}
