import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utills/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);
  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API_URL + resId);
      const jsonMenu = await data.json();
      setResInfo(jsonMenu?.data);
    } catch (error) {
      console.error("Failed to fetch menu:", error);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  if (resInfo === null) {
    return <Shimmer />;
  }

  //   console.log("value ", resInfo.cards[2].card.card.info.name);
  //   console.log(
  //     "menu data",
  //     resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  //   );

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  //   console.log(itemCards[0].card?.info?.name);

  return (
    <div className="menu-container">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((item, index) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} -{" RS. "}
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
