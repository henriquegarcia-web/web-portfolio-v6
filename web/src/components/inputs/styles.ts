// src/components/FormInputs/styles.ts

import styled from 'styled-components'
import { fontSize, fontWeight } from '@/utils/styles/fonts'
import { color, backgroundColor, borderColor } from '@/utils/styles/colors'

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`

export const Label = styled.label`
  ${fontSize('small')};
  ${fontWeight('medium')};

  ${color('textHeading')};
`

export const StyledInput = styled.input`
  width: 100%;
  padding: 15px 20px;
  border-radius: 6px;
  transition: border 0.2s;

  ${fontSize('regular')};

  outline: none;
  border: 1px solid;
  ${borderColor('borderSecondary')};
  ${color('text')};
  background-color: rgba(255, 255, 255, 0.15);

  &:focus {
    border-color: #0070f3;
  }
`

export const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 10px 14px;
  border-radius: 6px;
  transition: border 0.2s;
  resize: vertical;

  ${fontSize('regular')};

  outline: none;
  border: 1px solid;
  ${borderColor('borderSecondary')};
  ${color('text')};
  background-color: rgba(255, 255, 255, 0.15);

  &:focus {
    border-color: #0070f3;
  }
`

export const Error = styled.span`
  ${fontSize('small')};
  ${fontWeight('regular')};

  color: #ff4d4f;
`
