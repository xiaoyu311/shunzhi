import React, { Component } from 'react'
import Header from '../../share/Header/Header'
import './cart.css'

class Cart extends Component {
  state = {
    num:0,
    item: [
      {pic:'http://media.haoduoshipin.com/yummy/dishes/dish1.jpg', name:'white', price:'8', num:'2'},
      {pic:'http://media.haoduoshipin.com/yummy/dishes/dish2.jpg', name:'white', price:'6', num:'2'},
      {pic:'http://media.haoduoshipin.com/yummy/dishes/dish3.jpg', name:'white', price:'4', num:'2'},
      {pic:'http://media.haoduoshipin.com/yummy/dishes/dish1.jpg', name:'white', price:'5', num:'2'}
    ]
  }
  componentDidMount(){
    var total = 0
    for (var i = 0; i < this.state.item.length; i++) {
      total = Number(total) + Number(this.state.item[i].price*this.state.item[i].num)
    }
    this.setState({num:total})
  }
  handleClick(num, index){
    if ( this.state.item[index].num > 0 || num>0 ) {
      let arr = this.state.item.slice()//数组拷贝
      arr.map( (item, ind) =>{
        if (ind === index) {
          item.num = Number(item.num) + Number(num)
        }
        return item
      })
      this.setState({item:arr})
      var total = 0
      for (var i = 0; i < this.state.item.length; i++) {
        total =Number(total) + Number(this.state.item[i].price*this.state.item[i].num)
      }
      this.setState({num:total})
    }

  }
  render() {
    const showProduct = this.state.item.map( (item, index) => {
      return (
        <div key={index} className="cart-show-item">
          <div className="show-wrap-left">
            <img src={item.pic} alt="img" />
            <div className="show-wrap-left-right">
              <h3>{item.name}</h3>
              <span>${item.price}</span>
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
            <div>{showProduct}</div>
            <div className="balabce">
              结账
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Cart
