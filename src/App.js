import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './ui/pages/Home/Home'
import Signup from './ui/pages/Signup/Signup'
import Login from './ui/pages/Login/Login'
import Sidebar from './ui/share/Sidebar/Sidebar'
import { Provider } from 'react-redux'
import store from './store'
import Error from './ui/share/Error/Error'
import axios from 'axios'
import Settings from './Settings'

class App extends React.Component{
  componentDidMount(){
    let userId = localStorage.getItem('userId')
    if (userId) {
      axios.get(`${Settings.host}/user/${userId}`)
        .then( res =>store.dispatch({type:'SIGN_UP', username:res.data.user.username}))
    }
  }
  render(){
    return(
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Error />
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
