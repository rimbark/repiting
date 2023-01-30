import React from 'react'
import {connect} from 'react-redux'
import Wall from './Wall'
import axios from 'axios'
import {changeText, loadProfile, sendText} from '../../redux/profileReducer'

class WallContainer extends React.Component {
  componentDidMount () {
    debugger
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
    .then(response => {
      this.props.loadProfile(response.data)
    })
    this.props.wallData = {
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
    }
  }

  render () {
    return (
        <Wall {...this.props}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    wallData: state.profileReducer.wallData,
    profileInfo: state.profileReducer.profileInfo
  }
}

export default connect(mapStateToProps,
    {changeText, loadProfile, sendText})(
    WallContainer)