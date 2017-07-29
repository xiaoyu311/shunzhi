import React from 'react'
import Comment from './comment.svg'

class FeetItem extends React.Component{
  state = {
    showComment:false
  }
  Comment = () => {
    this.setState({showComment:!this.state.showComment})
  }
  render(){
    let style = {
      width: "85%",
      height: "20vh",
      margin:" 0 auto",
      background:`url(${this.props.url})`,
      backgroundSize:'cover',
      marginBottom:'15px'
    }
    let styles = {
      height:this.state.showComment? "50px":"0"
    }
    return(
      <div className="feet-wrap">
        <div className="feet-wrap-item">
          <div className="feet-item-top">
            <div className="feet-item-left">
              <img src="http://media.haoduoshipin.com/yummy/default-avatar.png" alt="img" />
              <div>
                <span className="feet-item-left-name">{this.props.name}</span>
                <span className="feet-item-left-time">{this.props.time}</span>
              </div>
            </div>
            <img onClick={this.Comment} src={Comment} alt="img" />
          </div>
          <div style={style}></div>
        </div>
        <div style={styles} className="feet-wrap-comment">{this.props.comment}</div>
      </div>
    )
  }
}
export default FeetItem
