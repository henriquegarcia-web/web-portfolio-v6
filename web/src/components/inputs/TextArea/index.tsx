// src/components/inputs/TextArea/index.tsx

import { forwardRef, TextareaHTMLAttributes } from 'react'

import { Error, FieldWrapper, Label, StyledTextArea } from '../styles'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, ...rest }, ref) => {
    return (
      <FieldWrapper>
        <Label>{label}</Label>
        <StyledTextArea ref={ref} {...rest} />
        {error && <Error>{error}</Error>}
      </FieldWrapper>
    )
  }
)

export default TextArea
