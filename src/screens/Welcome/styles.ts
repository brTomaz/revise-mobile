import styled, { css } from 'styled-components/native'

export const Wrapper = styled.View`
  ${({ theme }) => css`
    flex: 1;
    justify-content: space-between;
    align-items: center;
    padding: 64px 32px 56px;
    background-color: ${theme.colors.mainBg};
  `}
`

export const Box = styled.View`
  height: 100%;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    text-align: center;
    font-size: 40px;
    line-height: 50px;
    color: #fff;
  `}
`
