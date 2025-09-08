import { ActionTypes } from './actions'

export interface Item {
  id: number
  name: string
  price: number
  imageUrl: string
  description: string
  quantity: number
}

interface CartState {
  cart: Item[]
}

interface CartAction {
  type: ActionTypes
  payload: {
    item?: Item
    itemId?: number
  }
}

export function cartReducer(state: CartState, action: CartAction) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM: {
      const { item } = action.payload

      if (!item) return state

      const existingItemIndex = state.cart.findIndex(
        (cartItem) => cartItem.id === item.id,
      )

      let updatedCart
      if (existingItemIndex >= 0) {
        updatedCart = [...state.cart]
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + item.quantity,
        }
      } else {
        updatedCart = [...state.cart, item]
      }

      return {
        ...state,
        cart: updatedCart,
      }
    }

    case ActionTypes.REMOVE_ITEM: {
      const { itemId } = action.payload
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== itemId),
      }
    }

    case ActionTypes.INCREMENT_ITEM_QUANTITY: {
      const { itemId } = action.payload
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item,
        ),
      }
    }

    case ActionTypes.DECREMENT_ITEM_QUANTITY: {
      const { itemId } = action.payload
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === itemId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        ),
      }
    }

    default:
      return state
  }
}
