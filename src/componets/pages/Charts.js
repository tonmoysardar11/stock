import React, { useContext, useState, useEffect } from "react";
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

const Charts = ({change}) => {
  const [data, setdata] = useState([]);
  const [filter, setfilter] = useState("1D");
  // const [change, setchange] = useState(0);
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
        // setchange(
        //   formatdata(result)[formatdata(result).length - 1].value -
        //     formatdata(result)[0].value
        // );
      }
    } catch (error) {
      setdata({});
      console.log(error);
    }
  };

  useEffect(() => {
    updateChart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stock, filter]);

  const formatdata = (data) => {
    return data.c.map((element, index) => {
      return {
        value: element.toFixed(2),
        time: Unixtodate(data.t[index]),
      };
    });
  };
  const CustomTooltip = ({ payload, label, active }) => {
    if (active && payload) {
      return (
        <div
          className={`p-2 rounded-lg bg-gray-100 text-black shadow-lg shadow-gray-950`}
        >
          <p className="text-sm">
            {` $${payload[0].value}`} <b>|</b> {`${label} `}
          </p>
        </div>
      );
    }

    return null;
  };
  return (
    <div className="relative w-full h-full">
      <ul className="absolute top-0 md:top-5 right-2 md:right-5 flex flex-row items-center z-20">
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
            tick={""}
          />
          <YAxis
            domain={["dataMin-1", "dataMax+1"]}
            stroke={!theme ? "rgb(0 0 0)" : "rgb(255 255 255)"}
            tick={""}
            className="invisible"
            width={1}
          />
          <Tooltip content={<CustomTooltip />} />

          <Line
            type="monotone"
            dataKey="value"
            stroke={change >= 0 ? "rgb(22 163 74)" : "rgb(255 0 0)"}
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
