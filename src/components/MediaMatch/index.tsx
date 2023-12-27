import styled, { css } from 'styled-components'
import media, { DefaultBreakpoints } from 'styled-media-query'

type breakpoint = keyof DefaultBreakpoints

export type MediaMatchProps = {
  lessthan?: breakpoint
  greaterthan?: breakpoint
}

const mediaMatchModifiers = {
  lessthan: (size: breakpoint) => css`
    ${media.lessThan(size)` display: block `}
  `,

  greaterthan: (size: breakpoint) => css`
    ${media.greaterThan(size)` display: block `}
  `
}

export default styled.div<MediaMatchProps>`
  ${({ lessthan, greaterthan }) => css`
    display: none;

    ${!!lessthan && mediaMatchModifiers.lessthan(lessthan)}

    ${!!greaterthan && mediaMatchModifiers.greaterthan(greaterthan)}
  `}
`
