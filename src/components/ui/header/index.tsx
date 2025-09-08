'use client'
import { Search, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { useContext } from 'react'

import { CartContext } from '@/context/CartProvider'

import {
  CartBadge,
  CartContainer,
  HeaderContainer,
  HeaderContent,
  HeaderTitle,
  Nav,
  SearchContainer,
  SearchInput,
} from './styles'

export default function Header() {
  const { totalItems } = useContext(CartContext)

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link href="/">
          <HeaderTitle>InsanyShop</HeaderTitle>
        </Link>

        <Nav>
          <SearchContainer>
            <SearchInput
              type="text"
              placeholder="Procurando por algo específico?"
            />
            <Search size={24} color="#737380" />
          </SearchContainer>
          <Link href="/carrinho">
            <CartContainer>
              <ShoppingBag color="#737380" size={24} />
              {totalItems > 0 && <CartBadge>{totalItems}</CartBadge>}
            </CartContainer>
          </Link>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  )
}
