'use client'
import { Undo2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'

import { CartContext } from '@/context/CartProvider'
import { formatCurrency } from '@/utils/formatCurrency'

import { CartItem } from './components/cartItem'
import { CartSummary } from './components/CartSummary'
import {
  BackButton,
  CartItemsList,
  CartItemsSection,
  CartPageContainer,
  CartTitle,
  CartTotalPrice,
} from './styles'

export default function CartPage() {
  const router = useRouter()
  const { cart, totalItems, totalPrice } = useContext(CartContext)

  return (
    <CartPageContainer>
      <CartItemsSection>
        <BackButton onClick={() => router.back()}>
          <Undo2 size={18} />
          Voltar
        </BackButton>
        <CartTitle>SEU CARRINHO</CartTitle>
        <CartTotalPrice>
          Total ({totalItems} {totalItems === 1 ? 'produto' : 'produtos'})
          <strong> {formatCurrency(totalPrice)}</strong>
        </CartTotalPrice>

        <CartItemsList>
          {cart.length > 0 ? (
            cart.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                imageUrl={item.imageUrl}
                description={item.description}
                quantity={item.quantity}
              />
            ))
          ) : (
            <p>Seu carrinho está vazio</p>
          )}
        </CartItemsList>
      </CartItemsSection>

      <CartSummary />
    </CartPageContainer>
  )
}
