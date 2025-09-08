'use client'
import { ShoppingCart, Undo2 } from 'lucide-react'
import Image from 'next/image'
import { useContext } from 'react'
import { toast } from 'sonner'

import { CartContext } from '@/context/CartProvider'
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
  const { addItem } = useContext(CartContext)

  const handleAddToCart = (event: React.MouseEvent) => {
    event.preventDefault()
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.image,
      description: product.description,
      quantity: 1,
    })
    toast.success(`${product.name} adicionado ao carrinho!`)
  }

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

          <AddButton onClick={handleAddToCart}>
            <ShoppingCart size={18} />
            Adicionar
          </AddButton>
        </ProductInfo>
      </ProductContainer>
    </Container>
  )
}
