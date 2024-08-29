import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { addToCart } from "../redux/Cart/cartSlice";
import { FaRupeeSign } from "react-icons/fa";

type Cart = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  quantity: number;
};

const Cards: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const data: Cart[] = useSelector((state: RootState) => state.cart.items);

  const handleAddToCart = (cart: Cart) => {
    dispatch(addToCart(cart));
  };

  return (
    <div className="flex gap-3 flex-wrap ml-4 font-mono">
      {data.map((cart: Cart) => (
        <div
          key={cart.id}
          className="w-full max-w-[26rem] shadow-lg rounded-sm"
        >
          <div className="flex justify-center lg:h-[40vh] md:h-[20vh]">
            <img src={cart.imageUrl} alt={cart.name} />
          </div>
          <div className="flex text-xl font-bold justify-around m-2">
            <div className="name">{cart.name}</div>
            <div className="price flex gap-1 justify-center items-center">
              {cart.price}
              <FaRupeeSign className="size-4" />
            </div>
          </div>
          <div className="description font-mono text-sm text-center m-2">
            {cart.description}
          </div>
          <div className="flex justify-center m-2">
            <button
              onClick={() => handleAddToCart(cart)}
              className="bg-gray-950 text-white flex items-center p-2 rounded-sm"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
