import { Meta, StoryFn } from '@storybook/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    }
    /*
    Está apresentando erro devido o type: ''
    $icon: {
      type: ''
    }*/
  }
} as Meta

export const Default: StoryFn = (args) => <Button {...args} />

Default.args = {
  children: 'Buy now'
}

export const withIcon: StoryFn = (args) => <Button {...args} />

withIcon.args = {
  size: 'small',
  children: 'Buy now',
  $icon: <AddShoppingCart />
}
