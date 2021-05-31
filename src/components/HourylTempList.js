import React from "react";
import HourlyTempListItem from "./HourlyTempListItem"
export default function HourlyTempList({hourlyForecast}) {
   const list = hourlyForecast.map((hour) => {
        return <HourlyTempListItem key={hour.dt} {...hour}/>
   })
   return (
        <ul>
            {list}
        </ul>
    )
}