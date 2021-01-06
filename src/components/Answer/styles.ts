import styled, { css, DefaultTheme } from 'styled-components/native'

import { TextProps, State } from '.'

export const Wrapper = styled.TouchableOpacity`
  ${({ theme }) => css`
    background-color: ${theme.colors.mainBg};
    border-radius: 8px;
    padding: 8px;
  `}
`

const textModifiers = (theme: DefaultTheme) => ({
  Unavailable: () => css`
    color: ${theme.colors.white};
  `,
  Wrong: () =>
    css`
      color: ${theme.colors.error};
    `,
  Correct: () =>
    css`
      color: ${theme.colors.secondary};
    `
})

export const Text = styled.Text<TextProps>`
  ${({ theme, state }) => css`
    font-family: ${theme.fonts.regular};

    ${state === State.Unavailable && textModifiers(theme).Unavailable};
    ${state === State.Wrong && textModifiers(theme).Wrong};
    ${state === State.Correct && textModifiers(theme).Correct};
  `}
`
