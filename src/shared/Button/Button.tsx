import React, { Component } from 'react'

import { StyledButton } from './styled'

export interface IButtonProps {
  submit?: boolean
}

class Button extends Component<IButtonProps> {
  render() {
    const { children, submit } = this.props

    return <StyledButton submit={submit}>{children}</StyledButton>
  }
}

export default Button
