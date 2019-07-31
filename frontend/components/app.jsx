import React from 'react';
import {
   Route,
   Redirect,
   Switch,
   Link,
   HashRouter
} from 'react-router-dom';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import {AuthRoute, ProtectedRoute} from '../util/route_utils';

export default () => (
   <div>
      <AuthRoute exact path='/signup' component={SignupContainer} />
      <AuthRoute exact path='/login' component={LoginContainer} />
      <Route path='/' component={NavBarContainer} />
      {/* <ProtectedRoute path='/questions' component={QuestionIndexContainer} />  */}
   </div>
)

