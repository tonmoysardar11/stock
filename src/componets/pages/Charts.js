import React, { useState } from "react";
import { candle } from "../../const";
import { Unixtodate } from "../helpers/data-helpers";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Card from "./Card";
import { config } from "../../config";
const Charts = () => {
    const [data, setdata] = useState(candle);
    const [filter, setfilter] = useState('1D');
  
    const formatdata = (data) => {
      return data.c.map((element, index) => {
        return {
          value: element.toFixed(2),
          time: Unixtodate(data.t[index]),
        };
      });
    };
    console.log(formatdata(data))
  return (
    <Card>
        <ul className="absolute top-5 right-5 flex flex-row items-center z-40">
            {Object.keys(config).map((element,index)=>{
              return  <li key={index} onClick={()=>setfilter(element)}><button className={`p-2 m-1 text-sm rounded-md border-[2px] ${filter===element?'bg-indigo-500 text-white':'bg-gray-100 text-indigo-500'}`}>{element}</button> </li>
            })}


        </ul>
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={formatdata(data)}
        margin={{
          top: 5,
          right: 5,
          left: 5,
          bottom: 5,
        }}
      >
        <XAxis dataKey={'time'} />
        <YAxis domain={['dataMin','dataMax']} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="value"
          stroke="rgb(22 163 74)"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  </Card>
  )
}

export default Charts
