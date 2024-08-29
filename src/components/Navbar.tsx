import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const cartItemsCount = useSelector((state: RootState) => state.cart.cartItems.length);

  const handleClick = () => {
    navigate('/cart');
  };

  return (
    <div className="flex justify-around bg-gray-950 p-2 text-white">
      <div className="text-3xl font-mono font-bold">SHOPPING CART</div>
      <div className="relative">
        <FaShoppingCart onClick={handleClick} className="text-3xl cursor-pointer" />
        <div className="absolute top-[-10px] right-[-10px] w-6 h-6 rounded-full bg-red-700 text-white font-bold flex items-center justify-center text-xl">
          {cartItemsCount}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
