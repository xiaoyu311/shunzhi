import React from 'react'
import CommentIcon from '../../icons/CommentIcon'
import { Link } from 'react-router-dom'

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
      backgroundPosition:'center center',
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
            <div className="feet-item-rigth" onClick={this.Comment}>
              <CommentIcon color={this.state.showComment?'#F77062':'#ccc'} />
            </div>
          </div>
          <Link to="/dish/597be20c2bbfdbaa14bfa248">
            <div style={style}></div>
          </Link>

        </div>
        <div style={styles} className="feet-wrap-comment">{this.props.comment}</div>
      </div>
    )
  }
}
export default FeetItem
