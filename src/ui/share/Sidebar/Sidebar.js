import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import './sidebar.css'
import { Link } from 'react-router-dom'


class Sidebar extends React.Component{
  state = {
    isOpen:false
  }
  close = () =>{
    this.setState({isOpen:false})
  }
  render(){
    return(
        <Menu isOpen={this.state.isOpen}>
          <div className="bm-list-wrap">
            <img src="http://media.haoduoshipin.com/yummy/default-avatar.png" alt="avatar" />
            <div>
              <span>xiaoyu</span>
              <Link to="/">退出</Link>
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
export default Sidebar
