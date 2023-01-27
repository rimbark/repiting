import React from 'react'
import Wall from './Wall'
import {connect} from 'react-redux'
import {changeText, sendText} from '../../redux/profileReducer'

class WallContainer extends React.Component {
    render () {
    return (
        <div>
          <Wall {...this.props}/>
        </div>
    )}
}

let mapStateToProps = (state) => ({
  wallData: state.profileReducer.wallData
})

export default connect(mapStateToProps, {changeText, sendText})(WallContainer)