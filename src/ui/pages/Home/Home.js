import React from 'react'
import logo from './logo.svg'
import { Link } from 'react-router-dom'
import './home.css'

class Home extends React.Component{
  render(){
    return(
      <div className="home">
        <div className="home-hero">
          <img src={logo} alt="img" />
          <h1>
            吮指
          </h1>
          <p>
            享受舌尖艳遇
          </p>
        </div>
        <div className="home-actions">
          <Link to="/signup">注册</Link>
          <Link to="/login">登录</Link>
        </div>
      </div>
    )
  }
}
export default Home
