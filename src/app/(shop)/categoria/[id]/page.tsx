import Image from 'next/image'

import { getProductsByCategory } from '@/services/productService'
import { formatCurrency } from '@/utils/formatCurrency'

interface CategoryPageProps {
  params: {
    id: string
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { id } = await params
  const category = await getProductsByCategory(id)

  return (
    <div>
      <h1>Category Page</h1>
      <div>
        {category.map((product) => (
          <div key={product.id}>
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
            />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{formatCurrency(product.price)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
