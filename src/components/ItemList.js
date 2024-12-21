import { useDispatch } from "react-redux";
import { CDN_URL } from "../utills/constants";
import { addItem } from "../utills/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddCartItem = (item) => {
    //Dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items?.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-6/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card?.info.price
                  ? item.card?.info.price / 100
                  : item.card?.info?.finalPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card?.info?.description}</p>
          </div>
          <div className="w-6/12 p-4">
            <div className="absolute">
              <button
                className="p-2 mx-16 rounded bg-black text-white shadow-lg"
                onClick={() => handleAddCartItem(item)}
              >
                Add +
              </button>
            </div>
            <img src={CDN_URL + item.card.info?.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
