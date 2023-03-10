export const CHANGE_TEXT = 'CHANGE_TEXT'
export const SEND_TEXT = 'SEND_TEXT'
export const LOAD_PROFILE = 'LOAD_PROFILE'
export const SET_PROFILE = 'SET_PROFILE'
export const setProfileId = (userId) => ({type: SET_PROFILE, userId})
export const changeText = (text) => ({type: CHANGE_TEXT, text})
export const sendText = () => ({type: SEND_TEXT})
export const loadProfile = (profile) => ({type: LOAD_PROFILE, profile})

let initialState = {
  wallData: {
        inputPosts: [
          {
            id: 1,
            ava: 'https://pic.rutubelist.ru/user/66/37/66370b638af9d17b6d6a359d2e7c29d5.jpg',
            name: 'Vasya',
            text: 'First! Bitches!',
            likesCount: 5
          },
          {
            id: 2,
            ava: 'https://pic.rutubelist.ru/user/66/37/66370b638af9d17b6d6a359d2e7c29d5.jpg',
            name: 'Petya',
            text: 'Second message :(',
            likesCount: 10
          }
        ],
        outputPostBody: '',
        userId: 1
      },
  profileInfo: {
    photos: null
  }
}
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TEXT:
      return {
        ...state,
        wallData: {
          ...state.wallData,
          outputPostBody: action.text
        }
      }
    case SEND_TEXT:
      return {
        ...state,
        wallData: {
          ...state.wallData,
          inputPosts: [
            ...state.wallData.inputPosts,
            {
              id: 3,
              ava: 'https://pic.rutubelist.ru/user/66/37/66370b638af9d17b6d6a359d2e7c29d5.jpg',
              name: 'Noname',
              text: state.wallData.outputPostBody,
              likesCount: 0
            }],
          outputPostBody: ''
        }
      }
    case LOAD_PROFILE:
      return {
        ...state,
        profileInfo: action.profile
      }
    case SET_PROFILE:
      return {
        ...state,
        wallData: {
          ...state.wallData,
          userId: action.userId
        }
      }
    default:
      return state
  }
}
export default profileReducer