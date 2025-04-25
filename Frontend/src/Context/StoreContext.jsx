import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

  const [food_list, setFoodList] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  const [token, setToken] =useState("");

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({...prev,[itemId]: 1,}));
      return;
    }
    else { 
      setCartItems((prev) => ({...prev,[itemId]: prev[itemId] + 1}));
    }
    if (token) {
      await axios.post(`${baseURL}/api/cart/add`, { itemId }, { headers: { token}});
    }
   
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1})) ;
     if (token) {
      await axios.post(`${baseURL}/api/cart/remove`, { itemId }, { headers: { token}});
     }
  };


  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {

      if (cartItems[item] > 0) {

        let itemInfo = food_list.find((product) => product._id === item)
        totalAmount += itemInfo.price * cartItems[item];

      }
    }
    return totalAmount;
  }
 const fetchFoodList = async () => {
  const response = await axios.get(`${baseURL}/api/food/list`);
  if (response.data.success) {
    setFoodList(response.data.data);
  } else {
    console.error("Error fetching food list");
  } 
 }

const loadCartData = async (token) => {
    const response = await axios.post(`${baseURL}/api/cart/get`,{},{headers:{token}});
    setCartItems(response.data.cartData);
}

useEffect(() => {
  async function loadData() {
    await fetchFoodList();

    const localToken = localStorage.getItem('token');
    if (localToken) {
      setToken(localToken); // still update the state for later use
      await loadCartData(localToken); // use the token directly here
    }
  }
  loadData();
}, []);


  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    baseURL,
    token,
    setToken
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
