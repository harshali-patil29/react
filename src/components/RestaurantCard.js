import {CDN_URL} from "../utils/constants";
import { RATING_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    // console.log(props);
    const {resData} = props;
    const {
        name,
        cloudinaryImageId,
        areaName,
        cuisines,
        avgRating,
        sla:{
            deliveryTime,
            slaString
        }
         
    } = resData?.info;
    return (
        <div className="res-card">
            <img className="res-logo" src={CDN_URL+ cloudinaryImageId} alt="res-logo" />
            <h3>{name}</h3>
            <h5>{cuisines.join(', ')}</h5> 
            <p><img className="rating" src={RATING_URL} alt="star" />{avgRating}</p>
            <h5>{slaString}</h5>
            <p>{areaName}</p>
        </div>
    )
}

export default RestaurantCard;