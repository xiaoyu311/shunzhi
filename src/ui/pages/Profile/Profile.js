import React, { Component } from 'react'
import Header from '../../share/Header/Header'
import { LineChart, Line, XAxis, CartesianGrid, YAxis, Tooltip, PieChart, Pie, Cell } from 'recharts';

class Profile extends Component {
  handleClick = () => {
    console.log(1);
  }
  render() {
    const data = [
      {name: 'Page A', uv: 5000},
      {name: 'Page B', uv: 3000},
      {name: 'Page C', uv: 2000},
      {name: 'Page D', uv: 2780},
      {name: 'Page E', uv: 1890},
      {name: 'Page F', uv: 2390},
    ]
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#CCFF67', '#FCFF78'];
    return(
      <div style={{width:'100%'}}>
        <Header title="个人中心" />
        {/* <div onClick={this.handleClick}> */}

          <PieChart margin={{ top: 10, right: 340, bottom: 0, left: 0 }} width={730} height={250}>
            <Pie
              onClick={this.handleClick}
              data={data}
              dataKey="uv"
              cx="50%"
              cy="50%"
              innerRadius={30}
              outerRadius={75}
              fill="#8884d8"
              label>
              {
                data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
              }
            </Pie>
          </PieChart>
        {/* </div> */}
      </div>
    )
  }
}
export default Profile
