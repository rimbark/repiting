import {combineReducers} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import profileReducer from './profileReducer'

const rootReducer = combineReducers({
  profileReducer,
  // dialogsReducer,
  // usersReducer,
})

export const store = configureStore({
      reducer: rootReducer
    }
)