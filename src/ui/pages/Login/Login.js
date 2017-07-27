import React from 'react'
import Header from '../../share/Header/Header'
import { Link } from 'react-router-dom'
import './login.css'
import axios from 'axios'
import url from '../../../Settings'
import { connect } from 'react-redux'

class Login extends React.Component{
  login = e =>{
    e.preventDefault()
    let username = this.username.value
    let password = this.password.value
    let userId = localStorage.getItem('userId')
    if (userId) {
      this.props.dispatch({type:'SHOW_ALERT', msg:'请先退出次账号'})
    }else{
      axios.post(`${url.host}/user/login`,{username, password})
      .then( res => {
        this.props.dispatch({type:'SIGN_UP', username:res.data.username})
        this.form.reset()
        localStorage.setItem('userId', res.data.userId)
      })
      .catch( err => this.props.dispatch({type:'SHOW_ALERT', msg:err.response.data.msg}))
    }
  }
  render(){
    return(
      <div className="login">
        <Header title="login" />
        <div className="login-wrap">
          <div className="login-wrap-header">
            <h1>登录</h1>
            <p>连接一个小小而确定的幸福</p>
          </div>
          <form ref={value => this.form = value} onSubmit={this.login} className="login-wrap-form">
            <div className="login-wrap-form-inputs">
              <div>
                <input ref={value => this.username = value} type="text" placeholder="用户名" />
                <input ref={value => this.password = value} type="password" placeholder="密码" />
              </div>
            </div>
            <button type="submit">登录</button>
          </form>
          <div className="login-wrap-footer"><Link to="/signup">没有账号?点击注册</Link></div>
        </div>
      </div>
    )
  }
}

export default connect(null)(Login)
