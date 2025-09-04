'use client'
import Link from 'next/link'

import { ICategory } from '@/services/categoryService'

import { CardCategories } from '../cardCategories'
import { CategoriesContainer, CategoryTitle, Container } from './styles'

interface CategoriesAreaProps {
  categories?: ICategory[]
}

export function CategoriesArea({ categories = [] }: CategoriesAreaProps) {
  return (
    <Container>
      <CategoryTitle>Principais categorias</CategoryTitle>
      <CategoriesContainer>
        {categories.map((category) => (
          <Link key={category.id} href={`/categoria/${category.id}`}>
            <CardCategories
              name={category.name}
              productCount={category.productCount}
            />
          </Link>
        ))}
      </CategoriesContainer>
    </Container>
  )
}
