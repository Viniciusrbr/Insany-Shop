'use client'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'

import { IPagination } from '@/services/productService'

import { PaginationButton, PaginationContainer } from './styles'

interface PaginationProps {
  pagination: IPagination
  category?: string
}

export function Pagination({ pagination, category }: PaginationProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', String(page))

    if (category) {
      params.set('category', category)
    } else {
      params.delete('category')
    }

    router.push(`/?${params.toString()}`)
  }

  const pages = Array.from({ length: pagination.totalPages }, (_, i) => i + 1)

  return (
    <PaginationContainer aria-label="Paginação">
      <PaginationButton
        onClick={() => goToPage(pagination.currentPage - 1)}
        disabled={!pagination.hasPreviousPage}
        aria-label="Página anterior"
      >
        <ChevronLeft size={16} />
      </PaginationButton>

      {pages.map((p) => (
        <PaginationButton
          key={p}
          onClick={() => goToPage(p)}
          aria-current={p === pagination.currentPage ? 'page' : undefined}
          $isActive={p === pagination.currentPage}
        >
          {p}
        </PaginationButton>
      ))}

      <PaginationButton
        onClick={() => goToPage(pagination.currentPage + 1)}
        disabled={!pagination.hasNextPage}
        aria-label="Próxima página"
      >
        <ChevronRight size={16} />
      </PaginationButton>
    </PaginationContainer>
  )
}
