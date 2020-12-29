import styled from 'styled-components'

import { IButtonProps } from './Button'

export const StyledButton = styled.button.attrs((props: IButtonProps) => ({
  type: props.submit && 'submit',
}))``
