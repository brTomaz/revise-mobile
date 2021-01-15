/* eslint-disable @typescript-eslint/no-explicit-any */
import 'jest-styled-components'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { fireEvent } from '@testing-library/react-native'
import { ReactTestInstance } from 'react-test-renderer'
import { mocked } from 'ts-jest/utils'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { renderWithTheme } from '@/helpers'
import { NavigationButton } from '@/components'
import theme from '@/styles/theme'

jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native')

  return {
    __esModule: true,
    ...originalModule,
    useNavigation: jest.fn()
  }
})

const mockUseNavigation = mocked(useNavigation)

const navigate = jest.fn()

mockUseNavigation.mockReturnValue({
  navigate
} as any)

describe('<NavigationButton />', () => {
  let navigationButton: ReactTestInstance
  let icon: ReactTestInstance

  beforeEach(() => {
    const { getByTestId } = renderWithTheme(
      <NavigationButton
        text="Start"
        icon={
          <Icon size={24} name="chevron-right" testID="chevron-right-icon" />
        }
        navigateTo="Main"
        testID="navigate-to-main"
      />
    )
    navigationButton = getByTestId('navigate-to-main')
    icon = getByTestId('chevron-right-icon')
  })

  it('should navigate to the path specified in navigateTo', () => {
    fireEvent.press(navigationButton)

    expect(navigate).toHaveBeenCalledWith('Main')
  })

  it('should render with correct styles', () => {
    expect(navigationButton).toHaveStyle({
      backgroundColor: theme.colors.secondary,
      borderRadius: 8,
      flexDirection: 'row'
    })
  })

  it('should render the button icon', (): void => {
    expect(icon).toBeTruthy()
  })
})
