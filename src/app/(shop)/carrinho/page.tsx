'use client'
import { Undo2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

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
  return (
    <CartPageContainer>
      <CartItemsSection>
        <BackButton onClick={() => router.back()}>
          <Undo2 size={18} />
          Voltar
        </BackButton>
        <CartTitle>SEU CARRINHO</CartTitle>
        <CartTotalPrice>
          Total (3 produtos)<strong> R$161,00</strong>
        </CartTotalPrice>

        <CartItemsList>
          <CartItem
            id="1"
            name="Produto 1"
            price={100}
            imageUrl="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop"
            description="O mais avançado iPhone com chip A17 Pro, câmera de 48MP e design em titânio. Perfeito para quem busca performance e qualidade fotográfica excepcional."
            quantity={2}
          />
          <CartItem
            id="2"
            name="Produto 2"
            price={61}
            description="O mais avançado iPhone com chip A17 Pro, câmera de 48MP e design em titânio. Perfeito para quem busca performance e qualidade fotográfica excepcional."
            imageUrl="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop"
            quantity={1}
          />
          <CartItem
            id="3"
            name="Produto 3"
            price={61}
            description="O mais avançado iPhone com chip A17 Pro, câmera de 48MP e design em titânio. Perfeito para quem busca performance e qualidade fotográfica excepcional."
            imageUrl="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop"
            quantity={1}
          />
          <CartItem
            id="4"
            name="Produto 4"
            price={61}
            description="O mais avançado iPhone com chip A17 Pro, câmera de 48MP e design em titânio. Perfeito para quem busca performance e qualidade fotográfica excepcional."
            imageUrl="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop"
            quantity={1}
          />
        </CartItemsList>
      </CartItemsSection>

      <CartSummary />
    </CartPageContainer>
  )
}
