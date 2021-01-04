import React, { ChangeEvent, Component } from 'react'

import { StyledInput } from './styled'

interface IInputProps {
  type: string
  id?: string
  required?: boolean
  value?: string
  className?: string
  name?: string
  placeholder?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

class Input extends Component<IInputProps> {
  render() {
    const {
      type,
      id,
      required,
      value,
      className,
      onChange,
      name,
      placeholder,
    } = this.props

    return (
      <StyledInput
        id={id}
        className={className}
        name={name}
        onChange={onChange}
        value={value}
        type={type}
        placeholder={placeholder}
        required={required}
      />
    )
  }
}

export default Input
