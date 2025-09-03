import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0.5rem;
  margin: 60px auto 0;
  max-width: 1200px;
`

export const CategoryTitle = styled.h2`
  font-weight: 700;
  font-size: 2.5rem;
  margin-bottom: 47px;
  align-self: flex-start;
  width: 100%;
`

export const CategoriesContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 26px;
  margin-bottom: 60px;
`
