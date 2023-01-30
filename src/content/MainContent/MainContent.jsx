import React from 'react'
import {Route, Routes} from 'react-router-dom'
import MessagesContainer from '../Messages/MessagesContainer'
import UsersContainer from '../Users/UsersContainer'
import WallContainer from '../Wall/WallContainer'

const MainContent = () => {
  return (
      <div>
        <Routes>
          <Route path={'/wall/*'} element={<WallContainer/>}/>
          <Route path={'/messages/*'} element={<MessagesContainer/>}/>
          <Route path={'/users/*'} element={<UsersContainer/>}/>
          {/*<Music/>*/}
          {/*<Photos/>*/}
        </Routes>
      </div>
  )
}

export default MainContent