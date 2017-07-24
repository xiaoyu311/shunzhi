import React from 'react'
import LoginComponent from './LoginComponent'

class LoginPage extends React.Component{
  render(){
    return(
      <LoginComponent
        login="signup"
        signup="注册"
        children={
          <div>
            <div>
              <input type="text" placeholder="用户名" />
              <input type="text" placeholder="Email" />
              <input type="password" placeholder="密码" />
              <input type="password" placeholder="再输入一遍" />
            </div>
            <button>注册</button>
          </div>
        }
        click="已有账号？点击登录"
        src="login"
      />
    )
  }
}
export default LoginPage
