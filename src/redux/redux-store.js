import {combineReducers} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import profileReducer from './profileReducer'
import messagesReducer from './messagesReducer'
import usersReducer from './usersReducer'

const rootReducer = combineReducers({
  profileReducer,
  messagesReducer,
  usersReducer
})

export const store = configureStore({
      reducer: rootReducer
    }
)
window.store = store