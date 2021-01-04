import styled from 'styled-components'

export const EnterRoomWrapper = styled.div`
  max-width: 1000px;
  margin: 0px auto;
  padding: 0 15px;
  min-height: 100vh;
  display: flex;
  align-items: center;
`

export const EnterRoomFormBlock = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 20px auto;
`

export const EnterForm = styled.form`
  background-color: #65d6ce;
  border-radius: 15px;
  padding: 30px;
  .form-group {
    label {
      color: #6155a6;
      font-weight: 500;
      display: block;
      margin-bottom: 5px;
    }
    margin-bottom: 15px;
  }
  .btn-wrapper {
    text-align: center;
  }
`
