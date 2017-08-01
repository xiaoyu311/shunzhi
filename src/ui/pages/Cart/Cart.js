import React, { Component } from 'react'
import Header from '../../share/Header/Header'
import './cart.css'
import { connect } from 'react-redux'

class Cart extends Component {
  state = {
    num:0
  }
  componentDidMount(){
    var total = 0
    for (var i = 0; i < this.props.cartItem.length; i++) {
      total = Number(total) + Number(this.props.cartItem[i].cartItem.price*this.props.cartItem[i].num)
    }
    this.setState({num:total})
  }
  handleClick(num, index){
    if ( this.props.cartItem[index].num > 0 || num>0 ) {
      let arr = this.props.cartItem.slice()//数组拷贝
      var newItem = arr.map( (item, ind) =>{
        if (ind === index) {
          item.num = Number(item.num) + Number(num)
        }
        return item
      })
      this.props.dispatch({type:'REVISE_CART', cartItem:newItem})
      var total = 0
      for (var i = 0; i < this.props.cartItem.length; i++) {
        total =Number(total) + Number(this.props.cartItem[i].cartItem.price*this.props.cartItem[i].num)
      }
      this.setState({num:total})
    }

  }
  render() {
    console.log(this.props.cartItem);
    const showProduct = this.props.cartItem.map( (item, index) => {
      return (
        <div key={index} className="cart-show-item">
          <div className="show-wrap-left">
            <img src={item.cartItem.poster} alt="img" />
            <div className="show-wrap-left-right">
              <h3>{item.cartItem.name}</h3>
              <span>${item.cartItem.price}</span>
            </div>
          </div>
          <div className="show-wrap-right">
            <span onClick={this.handleClick.bind(this, -1, index)}>-</span>
            <div className="show-wrap-right-num">
              <span>{item.num}</span>
            </div>
            <span onClick={this.handleClick.bind(this, 1, index)}>+</span>
          </div>
        </div>
      )
    })
    return(
      <div className="cart">
        <Header title="购物车" />
        <div className="cart-wrap">
          <div className="cart-total">{this.state.num}元</div>
          <div className="cart-show-wrap">
            <div style={{marginTop:'-70px'}}>{showProduct}</div>
            <div className="balabce">
              结账
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cartItem:state.dishReducer.cart
})
export default connect(mapStateToProps)(Cart)
