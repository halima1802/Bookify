
import useFetch from "../../hooks/useFetch";
import "./featured.css";
import { useContext} from "react";
import { SearchContext } from "../../context/SearchContext";
import { useNavigate } from "react-router-dom";


const Featured = () => {
  const { data, loading } = useFetch(
    "/api/hotels/countByCity?cities=Surat,Mumbai,Bangalore"
  );
  const d = new Date();
  d.setDate(d.getDate() + 3);
  const dates = [{
    startDate: new Date(),
    endDate: d,
  }]
  const options = {
    adult: 1,
      children: 0,
      room: 1,
  }
  
  const navigate = useNavigate();
  const { dispatch } = useContext(SearchContext);
  const handleClick = (city) => {
    dispatch({ type: "NEW_SEARCH", payload: { destination:city,dates,options} });
    
      navigate("/hotels", { state: { destination:city,dates,options } });
  }
 
  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
        
          <div className="featuredItem" onClick={() => handleClick("Surat")}>
            <img
              src="https://static2.tripoto.com/media/filter/tst/img/856040/TripDocument/1538588155_a.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1 className="feauturedH1">Surat</h1>
              <h2 className="feauturedH2">{data[0]} properties</h2>
            </div>
          </div>
         

          <div className="featuredItem" onClick={() => handleClick("Mumbai")}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Mumbai_Aug_2018_%2843397784544%29.jpg/640px-Mumbai_Aug_2018_%2843397784544%29.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1 className="feauturedH1">Mumbai</h1>
              <h2 className="feauturedH2">{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem" onClick={() => handleClick("Bangalore")}>
            <img
              src="https://i.kinja-img.com/image/upload/c_fill,h_900,q_60,w_1600/1432fedb88c0d1cc56f4c496a80f251c.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1 className="feauturedH1">Bangalore</h1>
              <h2 className="feauturedH2">{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;