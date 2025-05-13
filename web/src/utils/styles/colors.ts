// src/utils/styles/colors.ts
import { css } from 'styled-components'
import { theme } from 'antd'
import { getRoleData } from '@/@types/usuarios'
import { useAuth } from '@/contexts/AuthProvider'

export type ColorTokenKeys =
  // Brand
  | 'colorPrimary'
  | 'colorSuccess'
  | 'colorWarning'
  | 'colorError'
  | 'colorInfo'

  // Text
  | 'colorText'
  | 'colorTextBase'
  | 'colorTextHeading'
  | 'colorTextLabel'
  | 'colorTextPlaceholder'
  | 'colorTextDisabled'
  | 'colorTextLightSolid'
  | 'colorTextSecondary'
  | 'colorTextDescription'

  // Backgrounds
  | 'colorBgBase'
  | 'colorBgContainer'
  | 'colorBgLayout'
  | 'colorBgElevated'
  | 'colorBgSpotlight'

  // Borders
  | 'colorBorder'
  | 'colorBorderSecondary'
  | 'colorSplit'

  // Special (custom)
  | 'roleColor'

const { useToken } = theme

export const color = (colorKey: ColorTokenKeys) => css`
  ${({ theme }): any => {
    const { token } = useToken()
    const { user } = useAuth()

    if (colorKey === 'roleColor') {
      return getRoleData(user?.role).color || ''
    }
    return token[colorKey] || ''
  }}
`

export const textColor = (colorKey: ColorTokenKeys) => css`
  color: ${({ theme }): any => {
    const { token } = useToken()
    const { user } = useAuth()

    if (colorKey === 'roleColor') {
      return getRoleData(user?.role).color
    }
    return token[colorKey]
  }} !important;
`

export const backgroundColor = (colorKey: ColorTokenKeys) => css`
  background-color: ${({ theme }): any => {
    const { token } = useToken()
    const { user } = useAuth()

    if (colorKey === 'roleColor') {
      return getRoleData(user?.role).color
    }
    return token[colorKey]
  }} !important;
`

export { useToken }
