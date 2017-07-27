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
      this.props.error?
      <div onClick={this.close} className="error">
        <div className="error-wrap">
          <p>{this.props.msg}</p>
          <button>关闭</button>
        </div>
      </div>
      :null
    )
  }
}
const mapStateToProps = (state) =>({
  error:state.stateErr.error,
  msg:state.stateErr.msg
})
export default connect(mapStateToProps)(Error)
