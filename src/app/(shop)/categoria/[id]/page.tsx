import { ProductsArea } from '@/components/ui/productsArea'
import { getAllCategories } from '@/services/categoryService'
import { getProducts } from '@/services/productService'

interface CategoryPageProps {
  params: {
    id: string
  }
  searchParams?: { page?: string }
}

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const resolvedParams = await params
  const resolvedSearchParams = await searchParams
  const { id } = resolvedParams
  const page = resolvedSearchParams?.page
    ? Number(resolvedSearchParams.page)
    : 1

  const { products, pagination } = await getProducts(6, id, page)
  const categories = await getAllCategories()

  return (
    <ProductsArea
      products={products}
      pagination={pagination}
      category={id}
      categories={categories}
      hideCategories={true}
    />
  )
}
