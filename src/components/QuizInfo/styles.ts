import styled, { css } from 'styled-components/native'

export const Wrapper = styled.View`
  align-items: center;
`

export const MainInfo = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.light};
    font-size: 32px;
    color: ${theme.colors.secondary};
  `}
`

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: 16px;
    color: ${theme.colors.white};
  `}
`
