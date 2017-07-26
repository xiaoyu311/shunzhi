import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './ui/pages/Home/Home'
import Signup from './ui/pages/Signup/Signup'
import Login from './ui/pages/Login/Login'
import Sidebar from './ui/share/Sidebar/Sidebar'
import { Provider } from 'react-redux'
import store from './store'

class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Route render={({location})=>{
              return location.pathname !== '/'?
              (<Sidebar />)
              :null
            }} />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
            </Switch>
          </div>

        </BrowserRouter>
      </Provider>
    )
  }
}
export default App
