import { api } from './api'
export interface ICategory {
  id: string
  name: string
  description: string
  icon: string
  productCount: number
}

export const getAllCategories = async (): Promise<ICategory[]> => {
  const response = await api.get('/categories')
  return response.data.categories
}
