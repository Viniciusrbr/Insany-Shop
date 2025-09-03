import { getProductById } from '@/services/productService'

import { ProductTemplate } from '../template/productTemplate'

interface ProductPageProps {
  params: {
    id: number
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = await getProductById(Number(id))

  return <ProductTemplate product={product} />
}
