export const CHANGE_MESSAGE = 'CHANGE_MESSAGE'
export const SEND_MESSAGE = 'SEND_MESSAGE'
export const changeMessage = (text) => ({type: CHANGE_MESSAGE, text})
export const sendMessage = () => ({type: SEND_MESSAGE})

let initialState = {
  messagesData: {
    inputMessages: [
      {
        id: 1,
        ava: 'https://pic.rutubelist.ru/user/66/37/66370b638af9d17b6d6a359d2e7c29d5.jpg',
        userName: 'Biba',
        text: 'Zdarova'
      },
      {
        id: 1,
        ava: 'https://pic.rutubelist.ru/user/66/37/66370b638af9d17b6d6a359d2e7c29d5.jpg',
        userName: 'Biba',
        text: 'OK'
      },
      {
        id: 1,
        ava: 'https://pic.rutubelist.ru/user/66/37/66370b638af9d17b6d6a359d2e7c29d5.jpg',
        userName: 'Biba',
        text: 'Davay poka'
      }
    ],
    outputMessageBody: ''
  }
}
const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MESSAGE:
      return {
        ...state,
        messagesData: {
          ...state.messagesData,
          outputMessageBody: action.text
        }
      }
    case SEND_MESSAGE:
      debugger
      return {
        ...state,
        messagesData: {
          ...state.messagesData,
          inputMessages: [
            ...state.messagesData.inputMessages,
            {
              id: 3,
              ava: 'https://pic.rutubelist.ru/user/66/37/66370b638af9d17b6d6a359d2e7c29d5.jpg',
              userName: 'Me',
              text: state.messagesData.outputMessageBody
            }],
          outputMessageBody: ''
        }
      }
    default:
      return state
  }
}
export default messagesReducer