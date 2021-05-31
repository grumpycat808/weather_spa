import logo from './logo.svg';
import './App.css';
import axios from "axios"
import {useState, useEffect} from "react"

import CurrentTemp from "./components/CurrentTemp"
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
    }
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
      setState({ ...state, currentWeather });
    })
  }, [])
  return (
    <main className="container">
      <h1>Hello World</h1>
        <div onChange={(e) => setState({...state, metric: e.target.value})}>
          <input type="radio" value="farenheit" name="metric" /> Farenheit <br></br>
          <input type="radio" value="celsius" name="metric" /> Celsius
        </div>
        <CurrentTemp {...state.currentWeather} metric={state.metric} />
    </main>
  );
}

export default App;
