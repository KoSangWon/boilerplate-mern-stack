import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';

import Auth from './components/hoc/auth'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null, true)}/>{/* 괄호로 감싸줘서 HOC(Higer Order Component) 사용 */}
          <Route exact path="/login" component={Auth(LoginPage, false)}/>
          <Route exact path="/register" component={Auth(RegisterPage, false)}/>
          <Route exact path="/register/per" component={Auth(RegisterPagePer, false)}/>


        </Switch>
      </div>
    </Router>
  );
}

export default App;