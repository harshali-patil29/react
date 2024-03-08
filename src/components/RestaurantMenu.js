import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();
    useEffect(()=>{
        fetchMenu();
    }, []
    );

    const fetchMenu = async ()=>{        
        
        const data = await fetch(MENU_URL+resId)
        const json = await data.json();
        console.log(json?.data?.cards[0]?.card?.card?.info);
        setResInfo(json);
    }

    if(resInfo === null) return <Shimmer />
    const {name, city, cloudinaryImageId, costForTwoMessage, cuisines} = resInfo?.data?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    return (
        <div className="menu">
            <h1>{name}</h1>
            <img className="res-card" src={CDN_URL+ cloudinaryImageId} alt="res-logo" />
            <h2>{city}</h2>
            <h2>{costForTwoMessage}</h2>
            <h2>{cuisines.join(', ')}</h2>
            <h2>Menu</h2>
            <ul>
                {
                    itemCards.map(
                        (item) => (
                            <li key={item.card.info.id}>{item.card.info.name} - {"Rs."+ item.card.info.price/100 || item.card.info.name/100} </li>
                        )
                    )
                }
            </ul>      
        </div>
    );
};

export default RestaurantMenu;
