import styled from 'styled-components'

export const ChatRoomMessage = styled.div`
  font-weight: 400;
  color: #000;
  background-color: #fff;
  max-width: 400px;
  border-radius: 10px;
  padding: 20px;
  font-size: 16px;
  margin-bottom: 30px;
  margin-left: auto;
  &.mine {
    background-color: #9ddfd3;
    margin-right: auto;
    margin-left: 0;
  }
  .message-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .message-author {
    margin-right: 5px;
    font-weight: 600;
  }
  .message-time {
    font-weight: 600;
  }
`
