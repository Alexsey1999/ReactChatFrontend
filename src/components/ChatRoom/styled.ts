import styled from 'styled-components'

export const ChatRoomWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .chat-room-container {
    width: 100%;
    margin: 10px 0;
  }
`

export const ChatRoomBlock = styled.div`
  max-width: 1000px;
  margin: 0px auto;
  .chat-room-content {
    display: flex;
  }
  .users-list {
    li {
      font-weight: 400;
      font-size: 16px;
      margin-bottom: 5px;
    }
  }
`

export const ChatRoomHeader = styled.div`
  background-color: #0e49b5;
  padding: 15px 0;
`

export const ChatRoomHeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
`

export const ChatRoomH4 = styled.h4`
  font-size: 20px;
  font-weight: 600;
  color: #79d70f;
`

export const ChatRoomSidebar = styled.aside`
  font-size: 20px;
  font-weight: 600;
  color: #79d70f;
  background-color: #086972;
  padding: 30px;
  height: 450px;
  overflow-y: auto;
  width: 280px;
`

export const ChatRoomNameBlock = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #79d70f;
  margin-bottom: 25px;
`

export const ChatRoomName = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #79d70f;
`

export const ChatRoomH4Common = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #fc8621;
  margin-bottom: 5px;
`

export const ChatRoomUsers = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #79d70f;
`

export const ChatRoomWindowChat = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #79d70f;
  background-color: #7e8a97;
  width: 100%;
  padding: 20px 30px;
  height: 450px;
  overflow-y: auto;
`

export const ChatRoomFooter = styled.div`
  background-color: #0e49b5;
  padding: 10px 30px;
  form {
    /* display: flex; */
    justify-content: flex-end;
  }

  textarea {
    border-radius: 5px;
    font-size: 18px;
    font-weight: 400;
    outline: none;
    padding: 15px;
    width: 100%;
    resize: none;
    border: none;
  }
`
