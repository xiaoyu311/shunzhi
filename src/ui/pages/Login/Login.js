import React from 'react'
import Header from '../../share/Header/Header'
import { Link } from 'react-router-dom'
import './login.css'
import axios from 'axios'
import url from '../../../Settings'
import Error from '../../share/Error/Error'
import store from '../../../store'
import { connect } from 'react-redux'

class Login extends React.Component{
  login = e =>{
    e.preventDefault()
    let username = this.username.value
    let password = this.password.value
    axios.post(`${url.host}/user/login`,{username, password})
      .then( res => console.log(res))
      .catch( err => store.dispatch({type:'true', error:true}))
  }
  render(){
    return(
      <div className="login">
        {
          this.props.error?<Error />:null
        }
        <Header title="login" />
        <div className="login-wrap">
          <div className="login-wrap-header">
            <h1>登录</h1>
            <p>连接一个小小而确定的幸福</p>
          </div>
          <form onSubmit={this.login} className="login-wrap-form">
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

const mapStateToProps = (state) =>({
  error:state.error
})
export default connect(mapStateToProps)(Login)
