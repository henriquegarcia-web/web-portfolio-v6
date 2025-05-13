// src/utils/styles/commons.ts

import styled from 'styled-components'
import { Form, Menu } from 'antd'

import { color, backgroundColor, textColor } from './colors'
import { Globals } from './globals'
import { fontHeight, fontSize, fontWeight } from './fonts'

// ===================================================== SCREEN

export const Screen = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  min-height: 100vh;
`

// ===================================================== VIEW

export type ViewSizes = 'small' | 'default'

export const View = styled.div<{ size: ViewSizes }>`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: ${({ size }) => (size === 'small' ? '70%' : '100%')};
  height: 100%;
  padding: ${Globals.layout.padding};
  border-radius: 8px;
  margin: 0 auto;

  border: 1px solid ${color('colorBorderSecondary')};
  ${backgroundColor('colorBgBase')}
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);
`

export const ViewHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${Globals.layout.content.headerHeight};
  padding: 0 ${Globals.layout.padding};
  border-radius: 6px;

  border: 1px solid ${color('colorBorderSecondary')};
  ${backgroundColor('colorBgLayout')}
`

export const ViewHeaderLeftSide = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  width: fit-content;
`

export const ViewHeaderRightSide = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  width: fit-content;
`

export const ViewContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  width: 100%;
  height: fit-content;
`

export const ViewContentHeader = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  width: 100%;
  height: ${Globals.layout.view.heeaderHeight};
  padding: 0 ${Globals.layout.padding};
  border-radius: 6px;

  border: 1px solid ${color('colorBorderSecondary')};

  ${fontSize('small')}
  ${fontHeight('small')}
  ${fontWeight('medium')}

  ${textColor('colorText')}

  svg {
    ${fontSize('xl')}

    ${textColor('colorText')}
  }

  ${backgroundColor('colorBgLayout')}
`

export const ViewContentWrapper = styled.div`
  width: 100%;
  height: fit-content;
`

// ===================================================== FORM

export const FormInputsWrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  height: fit-content;
`

// ===================================================== TABLE

export const TableExtrasWrapper = styled.div`
  display: flex;
  gap: 6px;

  button.ant-btn {
    width: fit-content !important;
    padding: 0 4px;
  }
`
