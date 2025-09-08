'use client'
import { useRouter, useSearchParams } from 'next/navigation'

import { ICategory } from '@/services/categoryService'
import { IPagination, IProduct } from '@/services/productService'

import { CardProducts } from '../cardProducts'
import { Pagination } from '../pagination'
import {
  Container,
  FilterContainer,
  FilterDescription,
  ProductDescription,
  ProductsContainer,
  ProductTitle,
  ProductTitlesContainer,
} from './styles'

interface ProductsAreaProps {
  products: IProduct[]
  pagination: IPagination
  category?: string
  categories?: ICategory[]
  hideCategories?: boolean
}

export function ProductsArea({
  products,
  pagination,
  category,
  categories,
  hideCategories = false,
}: ProductsAreaProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const search = searchParams.get('search') || ''

  const handleCategoryChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString())

    if (value) {
      params.set('category', value)
    } else {
      params.delete('category')
    }

    params.set('page', '1')

    router.push(`/?${params.toString()}`)
  }

  return (
    <Container>
      <FilterContainer>
        {hideCategories ? (
          <FilterDescription>
            Produtos /{' '}
            {category ? categories?.find((c) => c.id === category)?.name : ''}
          </FilterDescription>
        ) : (
          <select
            name="category"
            id="category"
            value={category ?? ''}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option value="">Todas as categorias</option>
            {categories?.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        )}

        <select name="sort" id="sort">
          <option value="">Organizar por</option>
          <option value="price-asc">Preço: Menor para Maior</option>
          <option value="price-desc">Preço: Maior para Menor</option>
          <option value="rating">Avaliação</option>
          <option value="name">Nome</option>
        </select>
      </FilterContainer>

      <ProductTitlesContainer>
        {search ? (
          <ProductTitle>
            Resultados da busca para: <b>{search}</b>
          </ProductTitle>
        ) : (
          <ProductTitle>
            {category
              ? categories?.find((c) => c.id === category)?.name
              : 'Todos os produtos'}
          </ProductTitle>
        )}

        <ProductDescription>
          {search
            ? ''
            : category
              ? categories?.find((c) => c.id === category)?.description
              : ''}
        </ProductDescription>
      </ProductTitlesContainer>

      <ProductsContainer>
        {products.length === 0 ? (
          <div
            style={{
              width: '100%',
              textAlign: 'center',
              color: '#888',
            }}
          >
            Nenhum resultado encontrado
          </div>
        ) : (
          products.map((product) => (
            <CardProducts
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
              category={product.category}
              rating={product.rating}
              stock={product.stock}
            />
          ))
        )}
      </ProductsContainer>

      <Pagination pagination={pagination} category={category} />
    </Container>
  )
}
