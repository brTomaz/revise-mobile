import styled, { css } from 'styled-components/native'
import HTML from 'react-native-render-html'

export const Wrapper = styled.ScrollView``

export const InfoWrapper = styled.View`
  ${({ theme }) => css`
    padding: 12px;
    background-color: ${theme.colors.white};
    border-radius: 8px;
    border-bottom-left-radius: 0;
    margin-bottom: 16px;
    align-items: center;
    justify-content: center;
  `}
`

export const Info = styled(HTML).attrs(() => ({
  contentWidth: 340
}))`
  padding: 8px;
`

export const AnswerAndStatementWrapper = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: 8px;
    padding: 4px;
  `}
`
export const StatementWrapper = styled.View`
  margin-bottom: 8px;
  padding: 0 4px;
`

export const AnswerWrapper = styled.View`
  margin-top: 4px;
`
