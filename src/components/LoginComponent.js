import React from 'react'
import {Icon} from 'antd'
import { Link } from 'react-router-dom'

class LoginPage extends React.Component{
  render(){
    return(
      <div className="LoginPage">
        <div className="LoginPage_main">
          <header>
            <div className="header_Top">
              <Icon style={{fontSize:'0.7rem', color:'#fff'}} type="menu-fold" />
              <span>{this.props.login}</span>
              <div style={{width:'0.7rem'}}></div>
            </div>
            <div className="header_Bottom">
              <p>{this.props.signup}</p>
              <p>连接一个小小的幸福</p>
            </div>
          </header>
          <div className="main">
            <form>
              {this.props.children}
            </form>
            <Link to={`/${this.props.src}`}>{this.props.click}</Link>
          </div>
        </div>
      </div>
    )
  }
}
export default LoginPage
