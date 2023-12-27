import { Meta, StoryFn } from '@storybook/react'
import Heading, { HeadingProps } from '.'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: StoryFn<HeadingProps> = (args) => <Heading {...args} />

//Inserindo valor padrao no texto
Default.args = {
  children: 'Most Populars',
  color: 'white'
}
