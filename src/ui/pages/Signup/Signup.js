import React from 'react'
import Header from '../../share/Header/Header'
import './signup.css'
import { Link } from 'react-router-dom'
import url from '../../../Settings'
import axios from 'axios'

class Signup extends React.Component{
  signup = e =>{
    e.preventDefault()
    let username = this.username.value
    // let email = this.email.value
    let password = this.password.value
    let repeat = this.repeat.value
    if (password === repeat) {
      axios.post(`${url.host}/user/signup`,{username, password})
        .then( res => console.log(res.data))
        .catch( err => console.log(err))
    }
  }
  render(){
    return(
      <div className="signup">
        <Header title="signup" />
        <div className="signup-wrap">
          <div className="signup-wrap-header">
            <h1>注册</h1>
            <p>连接一个小小而确定的幸福</p>
          </div>
          <form onSubmit={this.signup} className="signup-wrap-form">
            <div className="signup-wrap-form-inputs">
              <div>
                <input ref={value=>this.username=value} type="text" placeholder="用户名" />
                <input ref={value=>this.email=value} type="text" placeholder="Email" />
                <input ref={value=>this.password=value} type="password" placeholder="密码" />
                <input ref={value=>this.repeat=value} type="password" placeholder="在输入一遍" />
              </div>
            </div>
            <button type="submit">注册</button>
          </form>
          <div className="signup-wrap-footer"><Link to="/login">已有账号?点击登录</Link></div>
        </div>
      </div>
    )
  }
}
export default Signup
