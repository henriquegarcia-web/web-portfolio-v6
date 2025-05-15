// src/utils/styles/colors.ts

import { css } from 'styled-components'

export const Colors = {
  // Brand
  primary: '#1677ff',
  secondary: '#0f172a',
  tertiary: '#facc15',
  contrast: '#38bdf8',

  success: '#52c41a',
  warning: '#faad14',
  error: '#ff4d4f',
  info: '#1890ff',

  // Text
  text: '#e2e8f0',
  textBase: '#000000',
  textHeading: '#ffffff',
  textLegend: '#B4AFAF',
  textLabel: '#00000073',
  textPlaceholder: '#00000040',
  textDisabled: '#00000040',
  textButton: '#fff',
  textSecondary: '#353334',
  textDescription: '#636363',

  // Backgrounds
  bgBase: '#151312',
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
