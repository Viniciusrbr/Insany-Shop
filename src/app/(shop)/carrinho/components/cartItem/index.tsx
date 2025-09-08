import { ChevronDown, ChevronUp, Trash2 } from 'lucide-react'
import { useContext } from 'react'

import { CartContext } from '@/context/CartProvider'
import { formatCurrency } from '@/utils/formatCurrency'

import {
  CartItemContainer,
  CartItemDescription,
  CartItemDetails,
  CartItemFooter,
  CartItemHeader,
  CartItemImage,
  CartItemName,
  CartItemPrice,
  CartItemQuantity,
  DecreaseButton,
  IncreaseButton,
} from './styles'

interface CartItemProps {
  id: number
  name: string
  price: number
  imageUrl: string
  description: string
  quantity: number
}

export function CartItem({
  id,
  name,
  price,
  imageUrl,
  description,
  quantity,
}: CartItemProps) {
  const { removeItem, incrementItemQuantity, decrementItemQuantity } =
    useContext(CartContext)

  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={name} width={256} height={211} />
      <CartItemDetails>
        <CartItemHeader>
          <CartItemName>{name}</CartItemName>
          <Trash2
            size={24}
            color="#DE3838"
            style={{ cursor: 'pointer' }}
            onClick={() => removeItem(id)}
          />
        </CartItemHeader>
        <CartItemDescription>{description}</CartItemDescription>
        <CartItemFooter>
          <CartItemQuantity>
            <DecreaseButton
              aria-label="Diminuir quantidade"
              onClick={() => decrementItemQuantity(id)}
            >
              <ChevronDown />
            </DecreaseButton>
            <span>{quantity}</span>
            <IncreaseButton
              aria-label="Aumentar quantidade"
              onClick={() => incrementItemQuantity(id)}
            >
              <ChevronUp />
            </IncreaseButton>
          </CartItemQuantity>
          <CartItemPrice>{formatCurrency(price)}</CartItemPrice>
        </CartItemFooter>
      </CartItemDetails>
    </CartItemContainer>
  )
}
