import React from "react";

const convert = (kelvin, metric) => {
    if(metric === "farenheit") {
        return Math.round((kelvin * 9/5) - 459.67);
    } else if (metric === "celsius") {
        return Math.round(kelvin - 273.15)
    }
}
export default function CurrentTemp({metric, temperature, icon, description, uvi}) {
   return (
        <div id="">
            <p>Current temperature: {convert(temperature, metric)}</p>
            <h4>UV Index: {uvi}</h4>
        </div>
    )
}