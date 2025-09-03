'use client'
import Link from 'next/link'

import { CardCategories } from '../cardCategories'
import { CategoriesContainer, CategoryTitle, Container } from './styles'

export function CategoriesArea() {
  const categories = [
    {
      id: 'eletronicos',
      name: 'Eletrônicos',
      description: 'Smartphones, laptops, consoles e mais',
      icon: '📱',
      productCount: 4,
    },
    {
      id: 'roupas',
      name: 'Roupas e Calçados',
      description: 'Moda masculina, feminina e acessórios',
      icon: '👕',
      productCount: 4,
    },
    {
      id: 'casa',
      name: 'Casa e Decoração',
      description: 'Móveis, decoração e utilidades domésticas',
      icon: '🏠',
      productCount: 3,
    },
    {
      id: 'livros',
      name: 'Livros',
      description: 'Literatura, técnicos, educacionais e mais',
      icon: '📚',
      productCount: 3,
    },
    {
      id: 'esportes',
      name: 'Esportes e Lazer',
      description: 'Equipamentos esportivos e atividades ao ar livre',
      icon: '⚽',
      productCount: 3,
    },
  ]

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
