import RealEstatePreview from "./RealEstatePreview";
import { useRealEstates } from "../real-estates";

export default function RealEstateListPage() {

  const realEstates = useRealEstates();

  if(!realEstates?.length > 0) {
    return (<p>Chargement</p>)
  }

  return (
    <div className="flex flex-wrap flex-col items-center mt-8">
      <h1 className="text-5xl font-bold">Biens en vente</h1>
      <div className="flex flex-wrap justify-center mt-14 mx-20">
        {
          realEstates.filter(re => !!re?.onSale).map(re => (<RealEstatePreview realEstate={re} key={re.tokenId}/>))
        }
      </div>
    </div>
  )
}
