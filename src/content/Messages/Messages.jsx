import React from 'react'
import style from './Messages.module.css'

const Messages = (props) => {

  let onChangeText = (e) => {
    let text = e.target.value
    props.changeMessage(text)
  }

  let sendMessage = () => {
    props.sendMessage()
  }

  return <div className={style.wrapper}>
    {
      props.messagesData.inputMessages.map(
          m => <div className={style.messageBlock} key={m.id}>
            <img className={style.image} src={m.ava} alt="ava"/>
            <div>{m.userName}</div>
            <div>{m.text}</div>
          </div>)
    }
    <div className={style.selfMessage}>
    <textarea className={style.textPlace}
              onChange={onChangeText}
              value={props.messagesData.outputMessageBody}></textarea>
      <button onClick={sendMessage}>Send message</button>
    </div>
  </div>
}

export default Messages