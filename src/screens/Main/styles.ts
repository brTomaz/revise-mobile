import styled, { css } from 'styled-components/native'

export const ScrollScreen = styled.ScrollView`
  flex: 1;
`

export const LoaderWrapper = styled.View`
  flex: 1;
  justify-content: center;
`

export const Wrapper = styled.View`
  ${({ theme }) => css`
    flex: 1;
    justify-content: center;
    padding: 56px 16px 24px;
    background-color: ${theme.colors.mainBg};
  `}
`

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 48px;
`
