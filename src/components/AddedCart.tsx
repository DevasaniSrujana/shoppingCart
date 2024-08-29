import React from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store'; 
import { FaRupeeSign } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { increment, decrement, removeFromCart } from '../redux/Cart/cartSlice'; 

const AddedCart: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const handleIncrement = (id: number) => {
    dispatch(increment({ id }));
  };

  const handleDecrement = (id: number) => {
    dispatch(decrement({ id }));
  };

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const calculateItemPrice = (price: number, quantity: number) => {
    return price * quantity;
  };


  return (
    <div className='flex flex-col min-h-screen p-2 text-black'>
      <div className="flex flex-row flex-wrap flex-grow gap-3 p-4 font-mono w-full max-w-[100%] mx-auto">
        {cartItems.length === 0 ? (
          <p className="text-center">Your cart is empty</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="w-full max-w-[26rem] bg-white shadow-lg rounded-sm p-4 flex flex-col gap-2">
              <div className="flex justify-center mb-2">
                <img src={item.imageUrl} alt={item.name} className="object-cover w-full h-[200px] rounded-sm" />
              </div>
              <div className="flex justify-between text-xl font-bold mb-2">
                <div className="name">{item.name}</div>
                <div className="price flex gap-1 items-center">
                  {item.price}
                  <FaRupeeSign className="text-lg" />
                </div>
              </div>
              <div className="description font-mono text-sm text-center mb-2">
                {item.description}
              </div>
              <div className="flex justify-between items-center mb-2">
                <button
                  onClick={() => handleDecrement(item.id)}
                  className="bg-gray-700 text-white p-1 rounded-sm"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleIncrement(item.id)}
                  className="bg-gray-700 text-white p-1 rounded-sm"
                >
                  +
                </button>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="bg-red-600 text-white p-1 rounded-sm"
                >
                  Remove
                </button>
              </div>
              <div className="flex justify-between text-lg font-bold">
                <span>Total Price:</span>
                <span>
                  {calculateItemPrice(item.price, item.quantity)}
                  <FaRupeeSign className="text-lg" />
                </span>
              </div>
            </div>
          ))
        )}
      </div>
  
      <button
        onClick={() => navigate('/')}
        className="bg-gray-950 text-white p-2 mb-4 w-full max-w-[26rem] shadow-lg rounded-sm mx-auto"
      >
        Back to Home
      </button>
    </div>
  );
};

export default AddedCart;
