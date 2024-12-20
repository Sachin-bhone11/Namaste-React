import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  //fetch data
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API_URL + resId);
      const jsonMenu = await data.json();
      setResInfo(jsonMenu?.data);
    } catch (error) {
      console.error("Failed to fetch menu:", error);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
