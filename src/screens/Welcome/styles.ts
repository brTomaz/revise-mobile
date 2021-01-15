import styled, { css } from 'styled-components/native'

import { Transition } from './protocols'

type WrapperProps = {
  transition: Transition
}

export const Wrapper = styled.View<WrapperProps>`
  ${({ theme, transition }) => css`
    flex: 1;
    justify-content: ${transition === 'Starting' ? 'center' : 'space-between'};
    align-items: center;
    padding: 64px 32px 56px;
    background-color: ${theme.colors.mainBg};
  `}
`

export const Box = styled.View`
  flex: 1;
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
