'use client'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'

import { formatCurrency } from '@/utils/formatCurrency'

import {
  AddButton,
  CardContainer,
  CardContentArea,
  CardDescription,
  CardImage,
  CardPrice,
  CardTitle,
} from './styles'

interface CardProps {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
  rating: number
  stock: number
}

export function CardProducts({
  id,
  name,
  description,
  price,
  image,
  category,
  rating,
  stock,
}: CardProps) {
  const handleAddToCart = (event: React.MouseEvent) => {
    event.preventDefault()
    // Lógica para adicionar ao carrinho aqui
  }

  return (
    <CardContainer>
      <Link href={`/produto/${id}`}>
        <CardImage src={image} alt={name} width={356} height={270} />

        <CardContentArea>
          <CardTitle>
            <p>{category}</p>
            <p>{rating.toFixed(1)}</p>
          </CardTitle>

          <CardDescription>
            <p>{name}</p>
            <p>{description}</p>
          </CardDescription>

          <CardPrice>
            <p>{formatCurrency(price)}</p>
            <p>{stock} em estoque</p>
          </CardPrice>

          <AddButton onClick={handleAddToCart}>
            <ShoppingCart size={18} />
            Adicionar
          </AddButton>
        </CardContentArea>
      </Link>
    </CardContainer>
  )
}
