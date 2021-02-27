import RealEstatePreview from "./RealEstatePreview";
import { useRealEstates } from "../real-estates";

export default function RealEstateListPage() {

  const realEstates = useRealEstates();

  const RealEstatesOnSale = () => (
    realEstates.map((realEstate) => {
      if(realEstate.onSale) {
        return (<RealEstatePreview realEstate={realEstate} key={realEstate.tokenId}/>)
    }
  })
  )

  if(realEstates?.length > 0) {
    return (
      <div className="flex flex-wrap flex-col items-center">
        <h1 className="text-5xl font-bold mt-14">BIENS EN VENTE</h1>
        <div className="flex flex-wrap justify-center mt-28 m-72">
          <RealEstatesOnSale />
        </div>
      </div>
    )
  }

  return (<p>Chargement</p>)
}
