import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utills/useOnlineStatus";
import useRestaurantList from "../utills/useRestaurantList";

const Body = () => {
  const {
    restaurantList,
    filteredRestaurant,
    searchText,
    handleSearchOnChange,
    handleFilterOnRating,
    handleSearchClick,
  } = useRestaurantList();
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>You are offline please check your connection</h1>;
  }

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={handleSearchOnChange}
          />
          <button onClick={handleSearchClick}>Search</button>
        </div>
        <button className="filter-btn" onClick={handleFilterOnRating}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
