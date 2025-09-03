'use client'
import { CardProducts } from '../cardProducts'
import {
  Container,
  FilterContainer,
  ProductsContainer,
  ProductTitle,
} from './styles'

export function ProductsArea() {
  const products = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      description:
        'O mais avançado iPhone com chip A17 Pro, câmera de 48MP e design em titânio. Perfeito para quem busca performance e qualidade fotográfica excepcional.',
      price: 8999.99,
      image:
        'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
      category: 'eletronicos',
      stock: 25,
      rating: 4.8,
      brand: 'Apple',
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra',
      description:
        'Smartphone premium com S Pen integrada, câmera de 200MP e tela Dynamic AMOLED 2X de 6.8 polegadas. Ideal para produtividade e criatividade.',
      price: 7499.99,
      image:
        'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop',
      category: 'eletronicos',
      stock: 18,
      rating: 4.7,
      brand: 'Samsung',
    },
    {
      id: 3,
      name: 'MacBook Air M3',
      description:
        'Notebook ultrafino com chip M3, tela Liquid Retina de 13.6 polegadas e até 18 horas de bateria. Perfeito para trabalho e estudos.',
      price: 12999.99,
      image:
        'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop',
      category: 'eletronicos',
      stock: 12,
      rating: 4.9,
      brand: 'Apple',
    },
    {
      id: 4,
      name: 'PlayStation 5',
      description:
        'Console de nova geração com SSD ultra-rápido, ray tracing e controle DualSense com feedback tátil. A revolução dos games chegou.',
      price: 4199.99,
      image:
        'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=400&fit=crop',
      category: 'eletronicos',
      stock: 8,
      rating: 4.6,
      brand: 'Sony',
    },
    {
      id: 5,
      name: 'Camiseta Básica Premium',
      description:
        'Camiseta 100% algodão com corte moderno e acabamento premium. Disponível em várias cores, ideal para o dia a dia.',
      price: 89.99,
      image:
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      category: 'roupas',
      stock: 50,
      rating: 4.4,
      brand: 'BasicWear',
    },
    {
      id: 6,
      name: 'Jeans Skinny Masculino',
      description:
        'Calça jeans com elastano para maior conforto e mobilidade. Corte skinny moderno com lavagem escura premium.',
      price: 199.99,
      image:
        'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop',
      category: 'roupas',
      stock: 30,
      rating: 4.3,
      brand: 'DenimCo',
    },
  ]

  return (
    <Container>
      <FilterContainer>
        <select name="category" id="category">
          <option value="">Selecione a categoria</option>
          <option value="eletronicos">Eletrônicos</option>
          <option value="roupas">Roupas</option>
        </select>

        <select name="sort" id="sort">
          <option value="">Organizar por</option>
          <option value="price-asc">Preço: Menor para Maior</option>
          <option value="price-desc">Preço: Maior para Menor</option>
          <option value="rating">Avaliação</option>
          <option value="name">Nome</option>
        </select>
      </FilterContainer>

      <ProductTitle>Todos os produtos</ProductTitle>
      <ProductsContainer>
        {products.map((product) => (
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
        ))}
      </ProductsContainer>
    </Container>
  )
}
