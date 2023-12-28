import * as S from './styles'

export type LineColors = 'primary' | 'secondary'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  $lineleft?: boolean //$ para indicar que a propriedade é transitória e não deve ser passada para o DOM
  $linebottom?: boolean //$ para indicar que a propriedade é transitória e não deve ser passada para o DOM
  linecolor?: LineColors
  size?: 'small' | 'medium'
}

const Heading = ({
  children,
  color = 'white',
  $lineleft = false,
  $linebottom = false,
  linecolor = 'primary',
  size = 'medium'
}: HeadingProps) => (
  <S.Wrapper
    color={color}
    $lineleft={$lineleft}
    $linebottom={$linebottom}
    linecolor={linecolor}
    size={size}
  >
    {children}
  </S.Wrapper>
)

export default Heading
