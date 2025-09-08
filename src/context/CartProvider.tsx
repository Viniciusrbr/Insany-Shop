'use client'

import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { toast } from 'sonner'

import {
  addItemAction,
  decrementItemQuantityAction,
  incrementItemQuantityAction,
  removeItemAction,
} from '../reducers/cart/actions'
import { cartReducer, Item } from '../reducers/cart/reducer'

interface CartContextType {
  cart: Item[]
  addItem: (item: Item) => void
  removeItem: (itemId: Item['id']) => void
  decrementItemQuantity: (itemId: Item['id']) => void
  incrementItemQuantity: (itemId: Item['id']) => void
  totalItems: number
  totalPrice: number
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, { cart: [] }, () => {
    if (typeof window !== 'undefined') {
      const storedStateAsJSON = localStorage.getItem('cartState')

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }
    }

    return {
      cart: [],
    }
  })

  const { cart } = cartState

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0)

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )

  function addItem(item: Item) {
    dispatch(addItemAction(item))
  }

  function removeItem(itemId: Item['id']) {
    dispatch(removeItemAction(itemId))
    toast.success('Produto removido do carrinho!')
  }

  function incrementItemQuantity(itemId: Item['id']) {
    dispatch(incrementItemQuantityAction(itemId))
  }

  function decrementItemQuantity(itemId: Item['id']) {
    dispatch(decrementItemQuantityAction(itemId))
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stateJSON = JSON.stringify(cartState)
      localStorage.setItem('cartState', stateJSON)
    }
  }, [cartState])

  return (
    <CartContext.Provider
      value={{
        addItem,
        cart,
        decrementItemQuantity,
        incrementItemQuantity,
        removeItem,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
