import React from "react";
export default function HourlyTempListItem({temperature, description, icon, pop, uvi, key}) {

   return (
        <li key={key}>
            Temperature: {temperature}
        </li>
    )
}