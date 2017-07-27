import React from 'react'
import { PieChart, Pie, Sector, Cell } from 'recharts';


class Dashborder extends React.Component{
  render(){
    const data = [
                    {name: 'Group A', value: 1},
                    {name: 'Group B', value: 1},
                    {name: 'Group C', value: 1},
                    {name: 'Group D', value: 1}
                  ];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x  = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy  + radius * Math.sin(-midAngle * RADIAN);
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
          	{`${(percent * 100).toFixed(0)}%`}
          </text>
        )
      }

    return(
      <div>
        <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={170}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8" >
        	{
          	data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
      </PieChart>
      </div>
    )
  }
}
export default Dashborder
