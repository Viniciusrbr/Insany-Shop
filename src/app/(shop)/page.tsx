import { CategoriesArea } from '@/components/ui/categoriesArea'
import { ProductsArea } from '@/components/ui/productsArea'

export default async function Home() {
  return (
    <>
      <ProductsArea />
      <CategoriesArea />
    </>
  )
}
