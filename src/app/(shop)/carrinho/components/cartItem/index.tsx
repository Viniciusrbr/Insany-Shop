import { ChevronDown, ChevronUp, Trash2 } from 'lucide-react'

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
  id: string
  name: string
  description: string
  price: number
  imageUrl: string
  quantity?: number
  onRemove?: () => void
  onIncreaseQuantity?: () => void
  onDecreaseQuantity?: () => void
}

export function CartItem({
  name,
  description,
  price,
  imageUrl,
  quantity = 1,
  onRemove,
  onIncreaseQuantity,
  onDecreaseQuantity,
}: CartItemProps) {
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={name} width={256} height={211} />
      <CartItemDetails>
        <CartItemHeader>
          <CartItemName>{name}</CartItemName>
          <Trash2 size={24} color="#DE3838" onClick={onRemove} />
        </CartItemHeader>
        <CartItemDescription>{description}</CartItemDescription>
        <CartItemFooter>
          <CartItemQuantity>
            <DecreaseButton onClick={onDecreaseQuantity}>
              <ChevronDown />
            </DecreaseButton>
            <span>{quantity}</span>
            <IncreaseButton onClick={onIncreaseQuantity}>
              <ChevronUp />
            </IncreaseButton>
          </CartItemQuantity>
          <CartItemPrice>{formatCurrency(price)}</CartItemPrice>
        </CartItemFooter>
      </CartItemDetails>
    </CartItemContainer>
  )
}
