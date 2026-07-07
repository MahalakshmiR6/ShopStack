import { createContext, useState } from "react";

export const ShopContext = createContext();

function ShopProvider({ children }) {

  // Wishlist
  const [wishlist, setWishlist] = useState([]);

  // Cart
  const [cart, setCart] = useState([]);

  // Customer
  const [customer, setCustomer] = useState(null);

  // Theme
  const [theme, setTheme] = useState("light");

  // Add to Wishlist
 const addToWishlist = (product) => {

  const exists = wishlist.find(item => item.id === product.id);

  if (exists) {

    setWishlist(
      wishlist.filter(item => item.id !== product.id)
    );

  } else {

    setWishlist([...wishlist, product]);

  }

};

  // Remove Wishlist

  const removeFromWishlist = (id) => {

    setWishlist(wishlist.filter(item => item.id !== id));

  };

  // Add to Cart

  const addToCart = (product) => {

    if (!cart.find(item => item.id === product.id)) {

      setCart([...cart, product]);

    }

  };

  // Remove Cart

  const removeFromCart = (id) => {

    setCart(cart.filter(item => item.id !== id));

  };

  return (

    <ShopContext.Provider
      value={{

        wishlist,
        addToWishlist,
        removeFromWishlist,

        cart,
        addToCart,
        removeFromCart,

        customer,
        setCustomer,

        theme,
        setTheme

      }}
    >

      {children}

    </ShopContext.Provider>

  );

}

export default ShopProvider;