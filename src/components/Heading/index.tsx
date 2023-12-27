import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  $lineleft?: boolean //$ para indicar que a propriedade é transitória e não deve ser passada para o DOM
  $linebottom?: boolean //$ para indicar que a propriedade é transitória e não deve ser passada para o DOM
}

const Heading = ({
  children,
  color = 'white',
  $lineleft = false,
  $linebottom = false
}: HeadingProps) => (
  <S.Wrapper color={color} $lineleft={$lineleft} $linebottom={$linebottom}>
    {children}
  </S.Wrapper>
)

export default Heading
