import Image from 'next/image'
import styled from 'styled-components'

export const CardContainer = styled.div`
  max-width: 356px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
`

export const CardContentArea = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const CardImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
`

export const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;

  p:first-child {
    font-weight: 400;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.black};
  }

  p:last-child {
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 4px;

    &::before {
      content: '★';
      color: gold;
    }
  }
`

export const CardDescription = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black};
  p:first-child {
    font-weight: 700;
    margin-bottom: 5px;
  }

  p:last-child {
    font-weight: 400;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`

export const CardPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p:first-child {
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.green700};
  }

  p:last-child {
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.black};
  }
`

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  background-color: #000;
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 4px;
  padding: 12px;
  font-weight: 500;
  margin-top: 8px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #333;
  }
`
