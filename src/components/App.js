import React from 'react'
import LoginPage from './LoginPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ShunZhi from './ShunZhi'
import SignupPage from './SignupPage'


class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ShunZhi} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
        </Switch>
      </BrowserRouter>
    )
  }
}
export default App
