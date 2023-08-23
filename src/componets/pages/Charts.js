import React, { useContext, useState, useEffect } from "react";
import { candle } from "../../const";
import { Unixtodate, createDate, datetoUnix } from "../helpers/data-helpers";
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
import { ThemeContext } from "../../context/ThemeContext";
import { StockContext } from "../../context/StockContext";
import { stockChart } from "../../api/stock-api";

const Charts = () => {
  const [data, setdata] = useState([]);
  const [filter, setfilter] = useState("1D");
  const { theme } = useContext(ThemeContext);
  const { stock } = useContext(StockContext);

  const dateRange = () => {
    const { days, weeks, months, years } = config[filter];
    const endDate = new Date();
    const startDate = createDate(endDate, -days, -weeks, -months, -years);
    const startTimeStamp = datetoUnix(startDate);
    const endTimeStamp = datetoUnix(endDate);
    return { startTimeStamp, endTimeStamp };
  };

  const updateChart = async () => {
    const { startTimeStamp, endTimeStamp } = dateRange();
    const resolution = config[filter].resolution;
    try {
      if (stock) {
        const result = await stockChart(
          stock,
          resolution,
          startTimeStamp,
          endTimeStamp
        );
        setdata(formatdata(result));
        console.log(result);
      }
    } catch (error) {
      setdata({});
      console.log(error);
    }
  };

  useEffect(() => {
    updateChart();
  }, [stock, filter]);

  const formatdata = (data) => {
    return data.c.map((element, index) => {
      return {
        value: element.toFixed(2),
        time: Unixtodate(data.t[index]),
      };
    });
  };
  // const CustomTooltip = ({ payload, label, active }) => {
  //   if (active) {
  //     return (
  //       <div
  //         className={`p-2 rounded-lg bg-gray-100 text-black shadow-lg shadow-gray-950`}
  //       >
  //         <p className="text-sm">{` ${payload[0].value} | ${label} `}</p>
  //       </div>
  //     );
  //   }

  //   return null;
  // };
  return (
    <Card>
      <ul className="absolute top-5 right-5 flex flex-row items-center z-40">
        {Object.keys(config).map((element, index) => {
          return (
            <li key={index} onClick={() => setfilter(element)}>
              <button
                className={`p-2 m-1 text-sm rounded-md ${
                  filter === element
                    ? "bg-indigo-700 text-white"
                    : "bg-gray-100 text-indigo-700"
                }`}
              >
                {element}
              </button>
            </li>
          );
        })}
      </ul>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 5,
            left: 5,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey={"time"}
            stroke={!theme ? "rgb(0 0 0)" : "rgb(255 255 255)"}
          />
          <YAxis
            domain={["dataMin", "dataMax"]}
            stroke={!theme ? "rgb(0 0 0)" : "rgb(255 255 255)"}
          />
          <Tooltip />
          {/* custom tooltip to be fixed */}
          <Line
            type="monotone"
            dataKey="value"
            stroke="rgb(22 163 74)"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default Charts;
