import React, { useState } from 'react'
import CartContext from './CartContext'

const CartState = ({children}) => {
    const [cartProduct,setCartProduct]  = useState([])
    const [productItem, setProductItem] = useState()
    const addProduct = (id) => {
        setCartProduct((prev)=> [...prev, id])
    }
    const addProductItem = (id) => {
      setProductItem(id)
    }
    const removeFromCart = (id) =>{
      const index = cartProduct.findIndex((prod)=>{
        return prod._id !== id;
      })
      if(index !== -1){
        const prods = cartProduct.filter((_,i) =>{
          return i !== index;
        });
        setCartProduct(prods)
      }
    };
    const findProductInCartId = (id) => {
      const filteredProds = cartProduct.filter((value) => {
        return value === id;
      });
      setCartProduct(filteredProds);
      return filteredProds.length;
    };
  
  return  (
    <CartContext.Provider value={{cartProduct,productItem, addProduct ,addProductItem, removeFromCart, findProductInCartId}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartState