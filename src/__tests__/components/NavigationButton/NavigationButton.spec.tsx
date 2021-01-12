/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { fireEvent } from '@testing-library/react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { mocked } from 'ts-jest/utils'

import { renderWithTheme } from '@/helpers'
import { NavigationButton } from '@/components'

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
  it('should navigate to the path specified in navigateTo', () => {
    const { getByTestId } = renderWithTheme(
      <NavigationButton
        text="Start"
        icon={<Icon size={24} name="chevron-right" />}
        navigateTo="Main"
        testID="navigate-to-main"
      />
    )

    fireEvent.press(getByTestId('navigate-to-main'))

    expect(navigate).toHaveBeenCalledWith('Main')
  })
})
