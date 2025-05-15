import * as S from './styles'

export type ButtonVariant = 'primary' | 'secondary'

interface IButton {
  variant?: ButtonVariant
  label: string
  loading?: boolean
  disabled?: boolean
  onClick: () => void
}

const Button = ({
  variant = 'primary',
  label,
  disabled,
  loading,
  onClick
}: IButton) => {
  return (
    <S.Button
      variant={variant}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {label}
    </S.Button>
  )
}

export default Button
