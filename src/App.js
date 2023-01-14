import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Temperatures from './components/temperatures/Temperatures';
import TemperaturesChart from './components/temperaturesChart/TemperaturesChart';
import WeatherSummary from './components/weatherSummary/WeatherSummary';

function App() {

  const [data, setData] = useState({ city: '', desc: '', temp: '' });
  const [date, setDate] = useState({ day: '', currentTime: '' });

  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=baghdad&units=metric&appid=117dd5193319ea7bda366b58c1596d3c')
      .then(response => response.json())
      .then(res => {
        setData({
          city: `${res.name},${res.sys.country}`,
          desc: res.weather.at(0).description,
          temp: Math.round(res.main.temp),
        });

        const responseDate = new Date(res.dt * 1000);
        setDate({ day: responseDate.toLocaleString('en-US', { weekday: 'long' }), currentTime: responseDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric' }) });
      })
      .catch(err => console.error(err));
  }, []);

  return <>
    <Header date={date} />
    <WeatherSummary data={data} />
    <TemperaturesChart />
    <Temperatures />
  </>
}

export default App;
