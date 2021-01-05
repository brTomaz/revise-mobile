import { RectButton } from 'react-native-gesture-handler'
import styled, { css } from 'styled-components/native'

export const Wrapper = styled.View`
  ${({ theme }) => css`
    flex: 1;
    justify-content: space-around;
    align-items: center;
    padding: 16px;
    background-color: ${theme.colors.mainBg};
  `}
`

export const Box = styled.View`
  width: 100%;
  height: 100%;
  justify-content: space-around;
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

export const NavigationButton = styled(RectButton)`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
    border-radius: 8px;
    flex-direction: row;
    align-items: center;
  `}
`

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: 20px;
    font-weight: bold;
    color: ${theme.colors.mainBg};
    flex: 1;
    text-align: center;
  `}
`

export const IconContainer = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    padding: 16px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  `}
`
