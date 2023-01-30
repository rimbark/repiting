import React from 'react'
import style from './Users.module.css'
import defaultAva from '../../images/defaultAva.jpg'
import {NavLink} from 'react-router-dom'

const Users = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  const pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
      <div className={style.wrapper}>
        <div>
          {pages.map(p => {
            return (
                <span key={p} className={p === props.currentPage ?
                    style.selectedPage :
                    style.nonSelectPage} onClick={() => {
                  props.changePage(p)
                }}>{p}</span>
            )
          })}</div>
        <div className={style.users}>
          {
            props.users.map(u => <NavLink to={'/wall/' + u.id}>
              <div key={u.id} className={style.userInfo}>
                <div className={style.followPlace}>
                  <div>
                    <img className={style.avatar} src={u.photos.small === null
                        ? defaultAva :
                        u.photos.small} alt="ava"/>
                  </div>
                  {
                    u.followed
                        ? <button onClick={() => {
                          props.setUnFollow(u.id)
                        }}>UNFOLLOW</button>
                        : <button onClick={() => {
                          props.setFollow(u.id)
                        }}>FOLLOW</button>
                  }
                </div>
                <div className={style.bio}>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
                </div>
              </div>
            </NavLink>)
          }
        </div>
      </div>
  )
}

export default Users