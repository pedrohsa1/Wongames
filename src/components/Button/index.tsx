import * as S from './styles'
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

//Esse componente pode ser um botão ou um link
//Aplicando o polimorfismo com as
type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  $fullWidth?: boolean
  $icon?: JSX.Element
  as?: React.ElementType
} & ButtonTypes

const Button = ({
  children,
  $icon,
  size = 'medium',
  $fullWidth = false,
  ...props
}: ButtonProps) => (
  <S.Wrapper size={size} $fullWidth={$fullWidth} $hasicon={!!$icon} {...props}>
    {$icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
