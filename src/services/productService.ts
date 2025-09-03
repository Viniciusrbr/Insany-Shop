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

export const getAllProducts = async (): Promise<IProduct[]> => {
  const response = await api.get('/products')
  return response.data.products
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
