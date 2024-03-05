import React from "react";
import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState,useEffect } from "react";
//import { PulseLoader } from "react-spinners";
import Shimmer from "./Shimmer";


// console.log(resList[0].info.name);
const Body = () => {

    const [listOfRestaurant,setListOfRestaurant] = useState([]);
 
    useEffect(
        ()=>{
            fetchData();
        },[]
        );

    const fetchData = async () =>{
        //const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.05650&lng=73.06560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        // const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=19.05650&lng=73.06560");
        
        //const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=19.0759837&lng=72.8776559");
        //const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=19.0759837&lng=72.8776559");
        //error 400 changes should be done here...cause api is updated
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
        const json = await data.json();
        //console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };


    // if(listOfRestaurant.length === 0) {
    //     return <Shimmer />
    // }
    //conditional rendeing and ternary operator
    return listOfRestaurant.length === 0 ? <Shimmer /> :(
        <div className="body">
            <div className="search">What's on your mind?</div>

            <div className="filter">
                    <button className="filter-btn" id="all"
                    onClick={ 
                        () => {
                        // const filteredList = resList;
                        fetchData();
                        }
                    } >All</button>
                    <button className="filter-btn" id="based-on-rating"
                    onClick={ 
                        () => {
                        const filteredList = listOfRestaurant.filter((res)=>res.info.avgRating > 4);
                            console.log(filteredList);
                        //update the list using set 
                        setListOfRestaurant(filteredList);
                    }
                    } >Top Rated Restaurant</button>
                    <button className="filter-btn" id="based-on-delivery"
                    onClick={ 
                        () => {
                        const filteredList = listOfRestaurant.filter((res)=>res.info.sla.deliveryTime < 30);
                            console.log(filteredList);
                        //update the list using set 
                        setListOfRestaurant(filteredList);
                    }
                    } >Fast Delivery</button>
                    <button className="filter-btn" id="based-on-veg"
                    onClick={ 
                        () => {
                        const filteredList = listOfRestaurant.filter((res)=>res.info.veg === true);
                            console.log(filteredList);
                        //update the list using set 
                        setListOfRestaurant(filteredList);
                    }
                    } >Pure Veg</button>
            </div>

            
            <div className="res-container">
                    {listOfRestaurant.map((restaurant,index) =>(
                        <RestaurantCard key={index} resData = {restaurant}/>
                        ))
                    }
            </div>
        </div>
    )
}

export default Body;


