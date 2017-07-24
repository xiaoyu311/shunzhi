import React from 'react'
import LoginComponent from './LoginComponent'

class LoginPage extends React.Component{
  render(){
    return(
      <LoginComponent
        login="login"
        signup="登录"
        children={
          <div>
            <div>
              <input type="text" placeholder="用户名" />
              <input type="password" placeholder="密码" />
            </div>
            <button>登录</button>
          </div>
        }
        click="没有账号？点击注册"
        src="signup"
      />
    )
  }
}
export default LoginPage
