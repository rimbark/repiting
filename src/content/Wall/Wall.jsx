import React from 'react'
import style from './Wall.module.css'
import Post from './Post/Post'

const Wall = (props) => {
  debugger
  let inputPost = props.wallData.inputPosts.map(
      post => <Post post={post}/>)
  let onTextChanging = (e) => {
    let text = e.target.value
    props.changeText(text)
  }
  let onSendText = () => {
    props.sendText()
  }

  return (
      <div className={style.wall}>
        <div className={style.image}></div>
        <div className={style.myPosting}>
          <textarea className={style.textArea} onChange={onTextChanging}
                    value={props.wallData.outputPostBody}></textarea>
          <button onClick={onSendText}>Push me to sent message</button>
        </div>
        <div className={style.myPosts}>
          {inputPost}
        </div>
      </div>
  )
}
export default Wall