import { RectButton } from 'react-native-gesture-handler'
import styled, { css } from 'styled-components/native'

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
    color: ${theme.colors.white};
    flex: 1;
    text-align: center;
  `}
`

export const IconContainer = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: 16px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  `}
`
