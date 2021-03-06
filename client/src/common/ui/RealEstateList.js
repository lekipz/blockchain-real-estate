import RealEstatePreview from "./RealEstatePreview";

export default function RealEstateList({realEstates}) {

  return(
    <div className="flex flex-wrap justify-center mt-28 m-72">
      {
        realEstates.filter(
          re => !!re && !!re.tokenId
        )
          .map(
            re => (<RealEstatePreview realEstate={re} key={re.tokenId}/>)
          )
      }
    </div>
  )
}
