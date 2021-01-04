import { makeAutoObservable, reaction, toJS } from 'mobx'
import { makeObservable, observable, action, extendObservable } from 'mobx'

class RoomStore {
  room = {}
  roomAndUser = {
    name: '',
    room: '',
  }
  messages = []

  constructor() {
    makeObservable(this, {
      room: observable,
      messages: observable,
      roomAndUser: observable,
      setRoom: action,
      setMessages: action,
      setRoomAndUser: action,
    })
  }

  setRoom = (room: any) => {
    this.room = room
  }

  setMessages = (message: any) => {
    this.messages = message
  }

  setRoomAndUser = (roomAndUser: any) => {
    this.roomAndUser = roomAndUser
  }
}

export default new RoomStore()
