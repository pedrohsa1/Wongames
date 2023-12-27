import { Meta, StoryFn } from '@storybook/react'
import MediaMatch from '.'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta

export const Desktop: StoryFn = () => (
  <MediaMatch greaterthan="medium">Only on Desktop</MediaMatch>
)
export const Mobile: StoryFn = () => (
  <MediaMatch lessthan="medium">Only on Mobile</MediaMatch>
)

//Padronizar o viewport ao abrir o story do mobile
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
