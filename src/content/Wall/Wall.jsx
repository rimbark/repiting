import React from 'react'
import style from './Wall.module.css'
import Post from './Post/Post'
import defaultAva from '../../images/defaultAva.jpg'

const Wall = (props) => {
  debugger
  let inputPost = props.wallData.inputPosts.map(
      post => <Post post={post}/>)
  let onTextChanging = (e) => {
    let text = e.target.value
    props.changeText(text)
  }

debugger
  return (
      <div className={style.wall}>
        <div className={style.image}>
          <img className={style.avatar} src={defaultAva} alt="ava"/>
        </div>
        <div className={style.myPosting}>
          <textarea className={style.textArea} onChange={onTextChanging}
                    value={props.wallData.outputPostBody}></textarea>
          <button onClick={() => {props.sendText()}}>Push me to sent message</button>
        </div>
        <div className={style.myPosts}>
          {inputPost}
        </div>
      </div>
  )
}
export default Wall