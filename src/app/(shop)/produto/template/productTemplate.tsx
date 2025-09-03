'use client'
import { ShoppingCart, Undo2 } from 'lucide-react'
import Image from 'next/image'

import { formatCurrency } from '@/utils/formatCurrency'

import {
  AddButton,
  BackButton,
  Category,
  Container,
  Description,
  DescriptionTitle,
  ImageContainer,
  Price,
  ProductContainer,
  ProductInfo,
  ProductTitle,
} from './styles'

interface ProductTemplateProps {
  product: {
    id: number
    name: string
    image: string
    category: string
    price: number
    brand: string
    rating: number
    description: string
  }
}

export function ProductTemplate({ product }: ProductTemplateProps) {
  return (
    <Container>
      <BackButton href="/">
        <Undo2 size={18} />
        Voltar
      </BackButton>

      <ProductContainer>
        <ImageContainer>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={580}
          />
        </ImageContainer>

        <ProductInfo>
          <Category>{product.category}</Category>
          <ProductTitle>{product.name}</ProductTitle>
          <Price>{formatCurrency(product.price)}</Price>

          <DescriptionTitle>DESCRIÇÃO</DescriptionTitle>
          <Description>{product.description}</Description>

          <AddButton>
            <ShoppingCart size={18} />
            Adicionar
          </AddButton>
        </ProductInfo>
      </ProductContainer>
    </Container>
  )
}
