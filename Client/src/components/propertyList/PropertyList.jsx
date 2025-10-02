import useFetch from "../../hooks/useFetch"
import "./propertyList.css"
const PropertyList = () =>{
    const {data,loading} = useFetch("/api/hotels/countByType")

    const images = [
        "https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/363022710.jpg?k=b72cc0a5600c57b61352bfdf9fa51a4b582b1f2a7a4969817a42949ef1983df8&o=&hp=1",
        "https://digital.ihg.com/is/image/ihg/intercontinental-raa-atoll-6514910414-4x3",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/295090917.jpg?k=d17621b71b0eaa0c7a37d8d8d02d33896cef75145f61e7d96d296d88375a7d39&o=&hp=1",
        "https://pictures.lodgix.com/media/gallery/property-75953/i018511_preview.jpg"
    ]

    return (
        <div className="pList">
            {loading ? ("Loading please wait!") : 
                (<>
                    {data && images.map((image,index) =>(
                        <div className="pListItem" key={index}>
                            <img src={image} alt="" className="pListImg" />
                            <div className="pListTitles">
                                <h1> {data[index]?.type}</h1>
                                <h2> {data[index]?.count} {data[index]?.type}s </h2>
                            </div>
                        </div>
                    ))}
                </>)
            }
        </div>
    )
}
export default PropertyList;

