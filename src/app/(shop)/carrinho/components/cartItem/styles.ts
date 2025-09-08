import Image from 'next/image'
import styled from 'styled-components'

export const CartItemContainer = styled.li`
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray800};
  border-radius: 8px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const CartItemImage = styled(Image)`
  border-radius: 8px 0 0 8px;
  @media (max-width: 768px) {
    border-radius: 0px;
    width: 100% !important;
    height: auto !important;
  }
`

export const CartItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 16px 24px 31px;
`

export const CartItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`
export const CartItemName = styled.h3`
  font-weight: 300;
  font-size: 20px;
`

export const CartItemDescription = styled.p`
  font-weight: 400;
  font-size: 12px;
`

export const CartItemFooter = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    padding-top: 16px;
  }
`
export const CartItemQuantity = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray600};
  background-color: #f3f5f6;
  border: 1px solid #a8a8b3;
  border-radius: 8px;
  padding: 8px;
  gap: 8px;
`
export const DecreaseButton = styled.button`
  all: unset;
  cursor: pointer;
  :hover {
    background-color: #e1e1e6;
  }
`
export const IncreaseButton = styled(DecreaseButton)``

export const CartItemPrice = styled.p`
  font-weight: 600;
  font-size: 16px;
`
