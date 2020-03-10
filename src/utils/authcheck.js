import React, { Component } from 'react'
import history from './history'
import * as ACTIONS from '../store/actions/actions'
import { connect } from 'react-redux'

import axios from 'axios'

export class AuthCheck extends Component {

  send_profile_to_db = (profile) => {
    const data = profile
    axios.post('api/posts/userprofiletodb/', data)
    
  }

  componentDidMount() {

  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = (dispatch) => {
  return {
    login_success: () => dispatch(ACTIONS.loginSuccess()),
    login_failure: () => dispatch(ACTIONS.loginFailure()),
    add_profile: (profile) => dispatch(ACTIONS.addProfile(profile)),
    remove_profile: () => dispatch(ACTIONS.removeProfile()),
    set_db_profile: (profile) => dispatch(ACTIONS.setDbProfile(profile)),
    remove_db_profile: () => dispatch(ACTIONS.removeDbProfile())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthCheck)
