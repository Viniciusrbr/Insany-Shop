'use client'
import { CardContainer, CardDescription, CardTitle } from './styles'

interface CardCategoryProps {
  name: string
  productCount: number
}

export function CardCategories({ name, productCount }: CardCategoryProps) {
  return (
    <CardContainer>
      <CardTitle>{name}</CardTitle>
      <CardDescription>{productCount} produtos</CardDescription>
    </CardContainer>
  )
}
