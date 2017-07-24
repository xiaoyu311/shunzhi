import React from 'react'
import img from '../images/28445969-5896e9a8-6dfa-11e7-97e9-9e0ad4dab299_03.png'
import { Link } from 'react-router-dom'

class ShunZhi extends React.Component{
  render(){
    return(
      <div className="ShunZhi">
        <div className="ShunZhi_main">
          <div className="ShunZhi_main_top">
            <img src={img} alt="img" />
            <p>吮指</p>
            <p>享受舌尖艳遇</p>
          </div>
          <div className="ShunZhi_main_bottom">
            <Link to="/signup">注册</Link>
            <Link to="/login">登录</Link>
          </div>
        </div>
      </div>
    )
  }
}
export default ShunZhi
