import RealEstatePreview from "./RealEstatePreview";
import { useRealEstates } from "../real-estates";

export default function RealEstateListPage() {

  const realEstates = useRealEstates();

  if(realEstates) {
    console.log(realEstates)
    return (
      <div className="flex flex-wrap flex-col items-center">
        <h1 className="text-5xl font-bold mt-14">BIENS EN VENTE</h1>
        <div className="flex flex-wrap justify-center mt-28 m-72">
          {realEstates.map((realEstate) => realEstate ? (<RealEstatePreview realEstate={realEstate} key={realEstate.tokenId}/>): (<p>Chargement des biens...</p>))}
        </div>
      </div>
    )
  }

  return (<p>Chargement</p>)
}
