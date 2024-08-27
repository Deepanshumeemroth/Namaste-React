import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";


const Body = () => {

    //state variable

    // Other way of writing state variable

    // const arr = useState(resList);
    // const listofRestaurants = arr[0]; 
    // const setlistofRestaurants = arr[1]; 
    
    // setlistofRestaurants is used to trigger dom manipulations


    const [listofRestaurants, setlistofRestaurants] = useState(resList)


   return ( <div className='body'>
        <div className="filter">
            <button className="filter-btn"
            onClick={() => {
                const filteredList = listofRestaurants.filter((res) => res.data.avgRating > 4)
                setlistofRestaurants(filteredList);
            }}>Top Rated Restaurants</button>
        </div>
        <div className='res-container'>
            {
                listofRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant}></RestaurantCard>
                ))
            }
        </div>
    </div>
    )
}

export default Body;