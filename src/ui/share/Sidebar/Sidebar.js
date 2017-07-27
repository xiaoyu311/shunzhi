import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import './sidebar.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class Sidebar extends React.Component{
  state = {
    isOpen:false
  }
  close = () =>{
    this.setState({isOpen:false})
  }
  render(){
    let authStr = (
      <div>
        <span>{this.props.username}</span>
        <Link to="/">退出</Link>
      </div>
    )
    let userInfo = (
      <div>登录|注册</div>
    )
    return(
        <Menu isOpen={this.state.isOpen}>
          <div className="bm-list-wrap">
            <img src="http://media.haoduoshipin.com/yummy/default-avatar.png" alt="avatar" />
            <div>
              {this.props.isAuthenticated ? authStr : userInfo}
            </div>
          </div>
          <div className="bm-list-main">
            <Link to="">个人中心</Link>
            <Link to="">首页</Link>
            <Link to="">购物车</Link>
            <Link to="">猜你喜欢</Link>
          </div>
          <div className="bm-list-footer">
            <button onClick={this.close}>关闭</button>
          </div>
        </Menu>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated:state.account.isAuthenticated,
  username:state.account.username
})
export default connect(mapStateToProps)(Sidebar)
