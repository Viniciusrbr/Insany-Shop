import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  width: 208px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 26px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid #e0e0e0;
  border-radius: 12px;
`

export const CardTitle = styled.h2`
  font-size: 1rem;
  font-weight: 700;
`

export const CardDescription = styled.p`
  font-size: 1rem;
  font-weight: 400;
`
