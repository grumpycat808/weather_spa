import logo from './logo.svg';
import './App.css';
import axios from "axios"
import {useState, useEffect} from "react"

import CurrentTemp from "./components/CurrentTemp"
import HourlyTempList from "./components/HourylTempList"
function App() {
  const API_KEY = "e0f7da4dd53363e27c0770b54ed7ee7f";
  const [state, setState] = useState({
    metric:"celsius",
    city: "Vancouver",
    country: "Canada",
    currentWeather: {
      temperature: 0,
      icon: "",
      description: "",
      uvi: 0
    },
    hourlyForecast: []
  })

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=49.282730&lon=-123.120735&exclude=minutely,alerts&appid=${API_KEY}`)
    .then(res => {
      const currentWeather = {
        temperature: res.data.current.temp,
        icon: res.data.current.weather[0].icon,
        description: res.data.current.weather[0].description,
        uvi: res.data.current.uvi
      }

      /*
      var items = list.slice(0, size).map(i => {
    return <myview item={i} key={i.id} />
}
*/
      let hourly = res.data.hourly.slice(0, 5).map((hour) => {
        return {
          datetime: hour.dt,
          temperature: hour.temp,
          description: hour.weather[0].description,
          icon: hour.weather[0].icon,
          pop: hour.pop,
          uvi: hour.uvi
        }
      })
      
      setState({ ...state, currentWeather, hourlyForecast:hourly });
    })
  }, [])
  return (
    <main className="container">
      <h1>Hello World</h1>
        <div >
          <input type="radio" value="farenheit" name="metric" checked={state.metric === 'farenheit'} onChange={(e) => setState({...state, metric: 'farenheit'})}/> Farenheit <br></br>
          <input type="radio" value="celsius" name="metric" checked={state.metric === 'celsius'} onChange={(e) => setState({...state, metric: 'celsius'})}/> Celsius
        </div>
        <CurrentTemp {...state.currentWeather} metric={state.metric} />
        <HourlyTempList hourlyForecast={state.hourlyForecast} />
    </main>
  );
}

export default App;
