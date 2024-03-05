import React from "react";
import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState,useEffect } from "react";
//import { PulseLoader } from "react-spinners";
import Shimmer from "./Shimmer";

const Body = () => {

    const [listOfRestaurant,setListOfRestaurant] = useState([]);

    const [filteredRestaurant,setfilteredRestaurant] = useState([]);

    const [searchText, setsearchText] = useState("");
 
    useEffect(
        ()=>{
            fetchData();
        },[]
        );

    const fetchData = async () =>{
        //error 400 implies api is updated so changes should be done here in api url
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");        
        const json = await data.json();
        //console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    // if(listOfRestaurant.length === 0) {
    //     return <Shimmer />
    // }
    //conditional rendeing and ternary operator
    return listOfRestaurant.length === 0 ? <Shimmer /> :(
        <div className="body">
            <div className="search">
                <input type="text" placeholder="What's on your mind?" className="search-box"
                value={searchText}
                onChange={
                    (e)=>{
                        setsearchText(e.target.value)
                    }
                }
                />
                <button className="search-btn"
                onClick={()=>{
                    const filteredRestaurant = listOfRestaurant.filter(
                        (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setfilteredRestaurant(filteredRestaurant);
                }}

                >Search</button>
                
            </div>

            <div className="filter">
                    <button className="filter-btn" id="all"
                    onClick={ 
                        () => {
                        setfilteredRestaurant(listOfRestaurant);
                        }
                    } >All</button>
                    <button className="filter-btn" id="based-on-rating"
                    onClick={ 
                        () => {
                        const filteredList = listOfRestaurant.filter((res)=>res.info.avgRating > 4);
                            console.log(filteredList);
                        //update the list using set 
                        setfilteredRestaurant(filteredList);
                    }
                    } >Top Rated Restaurant</button>
                    <button className="filter-btn" id="based-on-delivery"
                    onClick={ 
                        () => {
                        const filteredList = listOfRestaurant.filter((res)=>res.info.sla.deliveryTime < 30);
                            console.log(filteredList);
                        //update the list using set 
                        setfilteredRestaurant(filteredList);
                    }
                    } >Fast Delivery</button>
                    <button className="filter-btn" id="based-on-veg"
                    onClick={ 
                        () => {
                        const filteredList = listOfRestaurant.filter((res)=>res.info.veg === true);
                            console.log(filteredList);
                        //update the list using set 
                        setfilteredRestaurant(filteredList);
                    }
                    } >Pure Veg</button>
            </div>

            
            <div className="res-container">
                    {filteredRestaurant.map((restaurant,index) =>(
                        <RestaurantCard key={index} resData = {restaurant}/>
                        ))
                    }
            </div>
        </div>
    )
}

export default Body;


