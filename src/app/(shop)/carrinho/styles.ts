import styled from 'styled-components'

export const CartPageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 32px;
`
export const CartItemsSection = styled.section`
  margin: 25px 0 23px 0;
  flex: 2;
`
export const BackButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-bottom: 22px;
  text-decoration: none;
  color: #617480;
  background: none;
  border: none;

  svg {
    margin-right: 8px;
    border-radius: 50%;
    border: 1px solid #617480;
    padding: 3px;
  }
`
export const CartTitle = styled.h2`
  font-weight: 500;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.gray800};
  margin-bottom: 6px;
`

export const CartTotalPrice = styled.p`
  font-weight: 300;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray800};
  margin-bottom: 23px;
`
export const CartItemsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  list-style: none;

  max-height: 600px;
  overflow-y: auto;
  padding-right: 16px;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`
