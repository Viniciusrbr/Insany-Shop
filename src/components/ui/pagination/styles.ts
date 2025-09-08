import styled from 'styled-components'

export const PaginationContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 21px;
  margin-top: 51px;
`

export const PaginationButton = styled.button<{ $isActive?: boolean }>`
  background-color: #e9e9f0;
  color: ${({ theme }) => theme.colors.gray600};
  font-weight: 400;
  font-size: 16px;
  padding: 11px 17px;

  border: none;
  border-radius: 8px;
  cursor: pointer;

  ${({ $isActive }) =>
    $isActive &&
    `
    border: 1px solid #A212DF;
    color: #A212DF;
  `}

  &:first-child,
  &:last-child {
    padding: 12px;
  }
`
