import styled, { css } from 'styled-components/native'

export const Wrapper = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.mainBg};
    flex: 1;
    justify-content: center;
  `}
`
export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 40px;
    font-family: ${theme.fonts.regular};
  `}
`

export const Total = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 56px;
    font-family: ${theme.fonts.bold};
  `}
`
