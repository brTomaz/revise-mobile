import styled, { css } from 'styled-components/native'

export const Wrapper = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
  `}
`
export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    font-size: 16px;
    color: ${theme.colors.black};
  `}
`
