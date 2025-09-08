import { useContext } from 'react'

import { CartContext } from '@/context/CartProvider'
import { formatCurrency } from '@/utils/formatCurrency'

import {
  CheckoutButton,
  Container,
  HelpLink,
  HelpLinks,
  ItemRow,
  ItemsContainer,
  Title,
  TotalRow,
} from './styles'

export function CartSummary() {
  const { totalPrice } = useContext(CartContext)
  return (
    <Container>
      <Title>RESUMO DO PEDIDO</Title>

      <ItemsContainer>
        <ItemRow>
          <p>Subtotal de produtos</p>
          <p>R$ 161,00</p>
        </ItemRow>

        <ItemRow>
          <p>Entrega</p>
          <p>R$ 40,00</p>
        </ItemRow>
      </ItemsContainer>

      <TotalRow>
        <p>Total</p>
        <p>{formatCurrency(totalPrice)}</p>
      </TotalRow>

      <CheckoutButton>FINALIZAR A COMPRA</CheckoutButton>

      <HelpLinks>
        <HelpLink href="#">AJUDA</HelpLink>
        <HelpLink href="#">REEMBOLSOS</HelpLink>
        <HelpLink href="#">ENTREGAS E FRETE</HelpLink>
        <HelpLink href="#">TROCAS E DEVOLUÇÕES</HelpLink>
      </HelpLinks>
    </Container>
  )
}
