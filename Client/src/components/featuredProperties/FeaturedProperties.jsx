import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";
import { Link} from 'react-router-dom';

const FeaturedProperties = () => {

  const { data, loading } = useFetch("/api/hotels?featured=true&limit=4");
  
  return (
    <div className="fp">
      {loading ? (
        "Loading" 
      ) : (
        <>
          {data.map((item) => (
            <Link to={`/hotels/${item._id}`} style={{textDecoration:"none" , color:"black"}  } key={item._id}>
            <div className="fpItem"  >
              <img
                src={item.photos[0]}
                alt=""
                className="fpImg"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              {item.rating && <div className="fpRating">
                <button>{item.rating}</button>
                <span>Excellent</span>
                </div>}
              <span className="fpPrice">Starting from <b>₹{item.cheapestPrice}</b></span>
              
            </div>
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;

