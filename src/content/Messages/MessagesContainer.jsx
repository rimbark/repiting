import React from 'react'
import Messages from './Messages'
import {changeMessage, sendMessage} from '../../redux/messagesReducer'
import {connect} from 'react-redux'

class MessagesContainer extends React.Component {
  render () {
    return (
        <div>
          <Messages {...this.props}/>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  messagesData: state.messagesReducer.messagesData
})

export default connect(mapStateToProps, {sendMessage, changeMessage})(MessagesContainer)