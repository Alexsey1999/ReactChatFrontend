import React, { Component, MouseEvent } from 'react'

import { StyledButton } from './styled'

export interface IButtonProps {
  className: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  submit?: boolean
}

class Button extends Component<IButtonProps> {
  render() {
    const { children, submit, className, onClick } = this.props

    return (
      <StyledButton onClick={onClick} className={className} submit={submit}>
        {children}
      </StyledButton>
    )
  }
}

export default Button
