import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray800};
  padding: 16px 24px 24px 24px;
  height: 700px;
`

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 29px;
`

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
`

export const ItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
`

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  padding: 8px 0 40px 0;
  font-size: 16px;
  font-weight: 600;
  border-top: 1px solid #e1e1e1;
`

export const CheckoutButton = styled.button`
  background-color: ${({ theme }) => theme.colors.green700};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 16px;
  font-size: 16px;
  font-weight: 500;
`

export const HelpLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: auto;
`

export const HelpLink = styled.a`
  color: ${({ theme }) => theme.colors.gray600};
  font-size: 16px;
  font-weight: 500;
  text-decoration: underline;
`
