import * as S from './styles'

export type ButtonVariant = 'primary' | 'secondary'
export type ButtonType = 'button' | 'submit' | 'reset'

interface IButton {
  variant?: ButtonVariant
  type?: ButtonType
  label: string
  loading?: boolean
  disabled?: boolean
  onClick: () => void
}

const Button = ({
  variant = 'primary',
  type = 'button',
  label,
  disabled,
  loading,
  onClick
}: IButton) => {
  return (
    <S.Button
      type={type}
      variant={variant}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {label}
    </S.Button>
  )
}

export default Button
