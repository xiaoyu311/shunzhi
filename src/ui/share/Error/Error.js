import React from 'react'
import './error.css'
import { connect } from 'react-redux'
import store from '../../../store'

class Error extends React.Component{
  //事件委托 讲道理感觉用事件委托可以避免事件冒泡
  close = (e) =>{
    if (e.target.tagName === "DIV" || e.target.tagName === "BUTTON") {
      store.dispatch({type:'false', error:false})
    }
  }
  render(){
    return(
      <div onClick={this.close} className="error">
        <div className="error-wrap">
          <p>密码错误,请重新登录</p>
          <button>关闭</button>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) =>({
  error:state.error
})
export default connect(mapStateToProps)(Error)
