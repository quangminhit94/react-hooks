import React, { Component } from 'react'

import { connect } from 'react-redux';

import Container1 from './containers/Container1'
import Header from './containers/Header';
import Profile from './containers/profile';
import Form1 from './containers/form1';
import RenderList from './containers/renderlist';


import Component1 from './functional/component1';
import Callback from './functional/callback';
import PrivateComponent from './functional/privatecomponent';
import UnauthRedirect from './functional/unauthredirect';
import Home from './functional/home';
import RenderListItem from './functional/renderlistitem';

import HooksForm1 from './hooks/hooks_form';
import HooksContainer1 from './hooks/hooks_container1';


import * as ACTIONS from './store/actions/actions';

import Auth from './utils/auth';
import AuthCheck from './utils/authcheck';
import history from './utils/history';

import { Router, Route, Switch, Redirect } from 'react-router';


export default class Routes extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
