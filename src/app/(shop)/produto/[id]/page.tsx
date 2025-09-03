import Image from 'next/image'
import Link from 'next/link'

import { getProductById } from '@/services/productService'
import { formatCurrency } from '@/utils/formatCurrency'

interface ProductPageProps {
  params: {
    id: number
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = await getProductById(Number(id))

  return (
    <div>
      <Link href="/">← Voltar</Link>

      <div>
        <div>
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            priority
          />
        </div>

        <div>
          <h1>{product.name}</h1>
          <p>Marca: {product.brand}</p>
          <p>Categoria: {product.category}</p>
          <p>Avaliação: {product.rating}/5</p>
          <p>{formatCurrency(product.price)}</p>
          <div>
            <h2>Descrição</h2>
            <p>{product.description}</p>
          </div>

          <button>Adicionar ao Carrinho</button>
        </div>
      </div>
    </div>
  )
}
