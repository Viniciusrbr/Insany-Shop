import { api } from './api'

export interface IProduct {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
  rating: number
  brand: string
  stock: number
}

export interface IPagination {
  currentPage: number
  totalPages: number
  totalProducts: number
  hasNextPage: boolean
  hasPreviousPage: boolean
}

export const getProducts = async (
  limit = 6,
  category?: string,
  page = 1,
  search?: string,
): Promise<{ products: IProduct[]; pagination: IPagination }> => {
  const params: Record<string, unknown> = {
    limit,
    page,
  }

  if (category) params.category = category
  if (search) params.search = search

  const response = await api.get('/products', { params })

  return {
    products: response.data.products,
    pagination: response.data.pagination as IPagination,
  }
}

export const getProductById = async (id: number): Promise<IProduct> => {
  const response = await api.get(`/products/${id}`)
  return response.data.product
}

export const getProductsByCategory = async (
  category: string,
): Promise<IProduct[]> => {
  const response = await api.get('/products', {
    params: {
      category,
    },
  })
  return response.data.products
}
