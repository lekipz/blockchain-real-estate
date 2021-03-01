import { useRealEstates } from "../real-estates";
import RealEstateList from "../common/ui/RealEstateList";

export default function RealEstateListPage() {

  const realEstates = useRealEstates();

  if(!realEstates?.length > 0) {
    return (<p>Chargement</p>)
  }

  return (
    <div className="flex flex-wrap flex-col items-center">
      <h1 className="text-5xl font-bold mt-14">Biens en vente</h1>
      <RealEstateList realEstates={realEstates.filter(re => !!re?.onSale)}/>
    </div>
  )
}
