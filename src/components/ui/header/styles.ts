import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  padding: 1.25rem 1rem;
`

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeaderTitle = styled.h1`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray700};
  font-size: 1.5rem;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f3f7ff;
  border-radius: 5px;
  padding: 0.6rem;
  width: 360px;
`

export const SearchInput = styled.input`
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
  padding-right: 0.5rem;
  color: ${({ theme }) => theme.colors.gray600};
  font-size: 0.875rem;
`

export const CartContainer = styled.div`
  position: relative;
  cursor: pointer;
`

export const CartBadge = styled.span`
  position: absolute;
  bottom: -8px;
  right: -8px;
  background-color: #ef4444;
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: bold;
`
