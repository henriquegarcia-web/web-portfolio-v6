// src/utils/styles/colors.ts

import { css } from 'styled-components'

export const Colors = {
  // Brand
  primary: '#1677ff',
  success: '#52c41a',
  warning: '#faad14',
  error: '#ff4d4f',
  info: '#1890ff',

  // Text
  text: '#000000d9',
  textBase: '#000000e0',
  textHeading: '#000000e0',
  textLabel: '#00000073',
  textPlaceholder: '#00000040',
  textDisabled: '#00000040',
  textLightSolid: '#fff',
  textSecondary: '#00000073',
  textDescription: '#00000073',

  // Backgrounds
  bgBase: '#fff',
  bgContainer: '#f5f5f5',
  bgLayout: '#f0f2f5',
  bgElevated: '#ffffff',
  bgSpotlight: '#fafafa',

  // Borders
  border: '#d9d9d9',
  borderSecondary: '#f0f0f0',
  split: '#f0f0f0'
} as const

export type ColorTokenKeys = keyof typeof Colors

export const color = (colorKey: ColorTokenKeys) => css`
  color: ${Colors[colorKey]} !important;
`

export const backgroundColor = (colorKey: ColorTokenKeys) => css`
  background-color: ${Colors[colorKey]} !important;
`

export const borderColor = (colorKey: ColorTokenKeys) => css`
  border-color: ${Colors[colorKey]} !important;
`
