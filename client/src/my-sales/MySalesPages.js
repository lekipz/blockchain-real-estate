import { useRealEstates } from '../real-estates';
import RealEstateList from "../common/ui/RealEstateList";

export default function MySalesPage() {
  const realEstates = useRealEstates()

  if(!realEstates?.length > 0) {
    return (<p>Chargement...</p>)
  }

  const filteredRealEstates = realEstates.filter(re => !!re?.isOwned)
  if (!filteredRealEstates.length > 0) {
    return(<p>Vous n'avez aucun bien en vente pour le moment</p>)
  }

  return (
    <div className="flex flex-wrap flex-col items-center">
      <h1 className="text-5xl font-bold mt-14">Mes biens en vente</h1>
      <RealEstateList realEstates={filteredRealEstates}/>
    </div>
  )
}
