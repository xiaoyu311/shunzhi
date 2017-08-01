import React, { Component } from 'react'
import Header from '../../share/Header/Header'
import './dish.css'
import img from '../../icons/images/9b78577ae4ab5be33fac81370c51fb0e.png'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Dish extends Component {
  addCart = () => {
    var Id = this.props.match.params.id
    console.log(Id);
    var cartItem = this.props.dish[Id]
    this.props.dispatch({type:"ADD_CART", cartItem:{cartItem:cartItem, num:1}})
  }
  render() {
    var {id} = this.props.match.params
    console.log(id);
    var dishItem = this.props.dish[id]
    return(
      Object.keys(this.props.dish).length !== 0?
      <div>
        <Header title={dishItem.name} />
        <div className="dish-wrap">
          <div className="show-product">
            <img src={dishItem.poster} alt="img" />
          </div>
          <div className="show-introduction">
            <div className="show-introduction-top">
              <span className="show-introduction-name">{dishItem.name}</span>
              <span>{dishItem.price}元</span>
              <span onClick={this.addCart}>
                <Link to="/cart"><img style={{width:'20px', height:'20px'}} src={img} alt="icon" /></Link>
              </span>
            </div>
            <div className="show-comment">
              {dishItem.desc}
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      :
      null
    )
  }
}

const mapStateToProps = (state) => ({
  dish:state.dishReducer.all
})
export default connect(mapStateToProps)(Dish)
