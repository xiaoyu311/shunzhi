import React from 'react'
import Header from '../../share/Header/Header'
import './dashborder.css'
import FeetItem from './feetItem'


class Dashborder extends React.Component{
  cards = [
    {name:'Billie Zhang', time:'Today,1:45 PM', url:'http://media.haoduoshipin.com/yummy/dishes/dish1.jpg', comment:'真的非常好吃'},
    {name:'Jordan', time:'Today,1:45 PM', url:'http://media.haoduoshipin.com/yummy/dishes/dish2.jpg', comment:'真好'},
    {name:'xiaoyu', time:'Today,1:45 PM', url:'http://media.haoduoshipin.com/yummy/dishes/dish3.jpg', comment:'真棒'}

  ]
  render(){
    return(
      <div className="dashborder">
        <Header title="好友更新" />
        {
          this.cards.map( (item, index ) =>
          <FeetItem
            key={index}
            name={item.name}
            time={item.time}
            url={item.url}
            comment={item.comment}/>
          )
        }
      </div>
    )
  }
}
export default Dashborder
