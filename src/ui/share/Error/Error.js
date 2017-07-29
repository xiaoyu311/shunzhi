import React from 'react'
import './error.css'
import { connect } from 'react-redux'

class Error extends React.Component{
  //事件委托 讲道理感觉用事件委托可以避免事件冒泡
  close = (e) =>{
    if (e.target.tagName === "DIV" || e.target.tagName === "BUTTON") {
      this.props.dispatch({type:'HIDE_ALERT'})
    }
  }
  render(){
    return(
      <div onClick={this.close} className={this.props.error ? "show-error error" : "error"}>
        <div className="error-wrap">
          <p>{this.props.msg}</p>
          <button className="btn">关闭</button>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) =>({
  error:state.stateErr.error,
  msg:state.stateErr.msg
})
export default connect(mapStateToProps)(Error)
