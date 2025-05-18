// src/components/inputs/Input/index.tsx

import { forwardRef, InputHTMLAttributes } from 'react'

import { Error, FieldWrapper, Label, StyledInput } from '../styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...rest }, ref) => {
    return (
      <FieldWrapper>
        <Label>{label}</Label>
        <StyledInput ref={ref} {...rest} autoComplete="off" />
        {error && <Error>{error}</Error>}
      </FieldWrapper>
    )
  }
)

export default Input
