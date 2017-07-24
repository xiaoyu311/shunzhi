import React from 'react'
import LoginPage from './LoginPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ShunZhi from './ShunZhi'
import SignupPage from './SignupPage'
import { nameOfAnimation as Menu } from 'react-burger-menu'



class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" exact component={ShunZhi} />
              <Route path="/login" component={LoginPage} />
              <Route path="/signup" component={SignupPage} />
            </Switch>
            <Menu pageWrapId={ "LoginPage" }>
              {/* <span></span> */}
            </Menu>
          </div>
      </BrowserRouter>
    )
  }
}
export default App
