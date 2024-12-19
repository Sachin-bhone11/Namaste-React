import { useEffect, useState } from "react";

const useRestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  // Handle input change
  const handleSearchOnChange = (e) => {
    setSearchText(e.target.value);
  };

  // Filter restaurants based on search text
  const handleSearchClick = () => {
    const filtered = restaurantList.filter((res) =>
      res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filtered); // Update filteredRestaurant
  };

  // Filter restaurants based on rating
  const handleFilterOnRating = () => {
    const filtered = restaurantList.filter((res) => res?.info?.avgRating > 4);
    setFilteredRestaurant(filtered); // Update filteredRestaurant
  };
  // API call to fetch restaurant data
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const jsonData = await response.json();
      const cards =
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setRestaurantList(cards);
      setFilteredRestaurant(cards); // Initialize filteredRestaurant with all restaurants
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    restaurantList,
    filteredRestaurant,
    searchText,
    handleSearchOnChange,
    handleFilterOnRating,
    handleSearchClick,
  };
};

export default useRestaurantList;
