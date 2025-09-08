import { CategoriesArea } from '@/components/ui/categoriesArea'
import { ProductsArea } from '@/components/ui/productsArea'
import { getAllCategories } from '@/services/categoryService'
import { getProducts } from '@/services/productService'

interface Props {
  searchParams?: { category?: string; page?: string; search?: string }
}

export default async function Home({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams
  const category = resolvedSearchParams?.category
  const page = resolvedSearchParams?.page
    ? Number(resolvedSearchParams.page)
    : 1
  const search = resolvedSearchParams?.search

  const { products, pagination } = await getProducts(6, category, page, search)
  const categories = await getAllCategories()

  return (
    <>
      <ProductsArea
        products={products}
        pagination={pagination}
        category={category}
        categories={categories}
      />
      <CategoriesArea categories={categories} />
    </>
  )
}
