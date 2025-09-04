import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0.5rem;
  margin: 0 auto;
  max-width: 1200px;
`

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 32px;

  select {
    background-color: transparent;
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray600};
    cursor: pointer;
    border: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    select {
      margin-bottom: 16px;
    }
  }
`

export const FilterDescription = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray600};
`

export const ProductTitlesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 50px 0 47px 0;
`

export const ProductTitle = styled.h2`
  font-weight: 700;
  font-size: 2.5rem;
  align-self: flex-start;
`
export const ProductDescription = styled.p`
  font-weight: 400;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.black};
`

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 26px;
  grid-row-gap: 34px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`
