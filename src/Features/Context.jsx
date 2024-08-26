import React, { useReducer } from 'react'
import { createContext } from 'react'
import CartReducer from './CartReducer'

export const CartContext = createContext()

const Context = ({children}) => {
    const [cart,dispatch] =useReducer(CartReducer,[])
  return (
    <CartContext.Provider value={{cart,dispatch}}>
        {children}
    </CartContext.Provider>
  )
}

export default Context

