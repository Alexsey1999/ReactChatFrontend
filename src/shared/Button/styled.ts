import styled from 'styled-components'

import { IButtonProps } from './Button'

export const StyledButton = styled.button.attrs((props: IButtonProps) => ({
  type: props.submit && 'submit',
}))`
  border: none;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  background-color: yellow;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  &.enter-room-btn {
    background-color: #21209c;
    color: #fff;
    padding: 14px 30px;
    transition: all 0.2s;
    width: 100%;
    margin-top: 15px;
    &:hover {
      background-color: #161591;
    }
  }
  &.leave-room {
    background-color: #fc8621;
    color: #fff;
    padding: 14px 30px;
    transition: all 0.2s;
    &:hover {
      background-color: #c24914;
    }
  }
  &.send-message {
    color: #fff;
    background-color: #54e346;
    transition: all 0.2s;
    &:hover {
      background-color: #2bba1d;
    }
  }
`
