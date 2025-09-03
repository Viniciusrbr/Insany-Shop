import Link from 'next/link'
import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 25px 0px;

  @media (max-width: 1200px) {
    padding: 16px;
  }
`

export const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-bottom: 22px;
  text-decoration: none;
  color: #617480;

  svg {
    margin-right: 8px;
    border-radius: 50%;
    border: 1px solid #617480;
    padding: 3px;
  }
`

export const ProductContainer = styled.div`
  display: flex;
  gap: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ImageContainer = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
  }
`

export const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const Category = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray800};
  text-transform: capitalize;
`

export const ProductTitle = styled.h1`
  font-weight: 300;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.gray800};
  margin: 12px 0px 4px 0px;
`

export const Price = styled.p`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.green500};
`

export const DescriptionTitle = styled.h2`
  font-weight: 500;
  font-size: 16px;
  margin-top: auto;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.gray600};
`

export const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray800};

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`

export const AddButton = styled.button`
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};

  border: none;
  border-radius: 4px;
  padding: 8px;
  font-weight: 500;

  cursor: pointer;
`
