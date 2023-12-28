import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { HeadingProps, LineColors } from '.'

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};

    &::after {
      width: 3rem;
    }
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `,

  lineleft: (theme: DefaultTheme, linecolor: LineColors) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors[linecolor]};
  `,

  linebottom: (theme: DefaultTheme, linecolor: LineColors) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      position: absolute;
      left: 0;
      bottom: -0.5rem;
      content: '';
      width: 5rem;
      border-bottom: 0.5rem solid ${theme.colors[linecolor]};
    }
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, $lineleft, $linebottom, linecolor, size }) => css`
    color: ${theme.colors[color!]};

    ${$lineleft && wrapperModifiers.lineleft(theme, linecolor!)}
    ${$linebottom && wrapperModifiers.linebottom(theme, linecolor!)}
    ${!!size && wrapperModifiers[size](theme)}
  `}
`
