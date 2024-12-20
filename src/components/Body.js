import { Link } from "react-router-dom";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utills/useOnlineStatus";
import useRestaurantList from "../utills/useRestaurantList";
import { useContext } from "react";
import UserContext from "../utills/userContext";

const Body = () => {
  const {
    restaurantList,
    filteredRestaurant,
    searchText,
    handleSearchOnChange,
    handleUserNameChange,
    handleFilterOnRating,
    handleSearchClick,
  } = useRestaurantList();
  const onlineStatus = useOnlineStatus();
  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);
  const { loggedInUser } = useContext(UserContext);
  if (onlineStatus === false) {
    return <h1>You are offline please check your connection</h1>;
  }

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={handleSearchOnChange}
          />
          <button
            onClick={handleSearchClick}
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={handleFilterOnRating}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <label>UserName : </label>
          <input
            value={loggedInUser}
            onChange={handleUserNameChange}
            className="border border-black p-2 mx-2"
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            {restaurant?.info?.avgRating > 4.5 ? (
              <PromotedRestaurantCard resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
