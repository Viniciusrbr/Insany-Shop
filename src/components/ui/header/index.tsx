'use client'
import { Search, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useContext, useState } from 'react'

import { CartContext } from '@/context/CartProvider'

import {
  CartBadge,
  CartContainer,
  HeaderContainer,
  HeaderContent,
  HeaderTitle,
  Nav,
  SearchButton,
  SearchContainer,
  SearchInput,
} from './styles'

export default function Header() {
  const { totalItems } = useContext(CartContext)
  const router = useRouter()
  const searchParams = useSearchParams()
  const [search, setSearch] = useState(searchParams.get('search') || '')

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const params = new URLSearchParams(searchParams.toString())
    if (search) {
      params.set('search', search)
      params.set('page', '1')
    } else {
      params.delete('search')
    }
    router.push(`/?${params.toString()}`)
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link href="/">
          <HeaderTitle>InsanyShop</HeaderTitle>
        </Link>

        <Nav>
          <SearchContainer onSubmit={handleSearch}>
            <SearchInput
              type="text"
              placeholder="Procurando por algo específico?"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <SearchButton type="submit">
              <Search size={24} color="#737380" />
            </SearchButton>
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
