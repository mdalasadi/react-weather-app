import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Temperatures from './components/temperatures/Temperatures';
import TemperaturesChart from './components/temperaturesChart/TemperaturesChart';
import WeatherSummary from './components/weatherSummary/WeatherSummary';

function App() {

  const [data, setData] = useState({ city: '', desc: '', temp: '', icon: '' });
  const [date, setDate] = useState({ day: '', currentTime: '' });
  const [fiveDaysForecast, setFiveDaysForecast] = useState([]);
  const [city, setCity] = useState('london');
  const [chartData, setChartData] = useState({ labels: [], temps: [] });

  const getCityNameHandler = (enteredCity) => {
    setCity(enteredCity);
  }

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=117dd5193319ea7bda366b58c1596d3c`)
      .then(response => response.json())
      .then(res => {
        setData({
          city: `${res.name},${res.sys.country}`,
          desc: res.weather.at(0).description,
          temp: Math.round(res.main.temp),
          icon: res.weather.at(0).icon,
        });

        const responseDate = new Date(res.dt * 1000);
        setDate({ day: responseDate.toLocaleString('en-US', { weekday: 'long' }), currentTime: responseDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric' }) });
      })
      .catch(err => console.error(err));

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=117dd5193319ea7bda366b58c1596d3c`)
      .then(response => response.json())
      .then((res) => {
        const currentDate = new Date(res.list.at(0).dt_txt.split(' ').at(0));
        const getFormattedDate = () => new Date(currentDate.setDate(currentDate.getDate() + 1)).toISOString().split('T').at(0);

        const nextFiveDays = [getFormattedDate(), getFormattedDate(), getFormattedDate(), getFormattedDate(), getFormattedDate()]
          .map((date) => date + ' 12:00:00');

        setFiveDaysForecast(res.list
          .filter(data => nextFiveDays.includes(data.dt_txt))
          .map(temp => ({ day: new Date(temp.dt_txt).toLocaleString('en-US', { weekday: 'long' }), temperature: Math.round(temp.main.temp), icon: temp.weather.at(0).icon })));

        setChartData((_) => {
          const labels = res.list.slice(0, 8).map(data => new Date(data.dt_txt).toLocaleString('en-US', { hour: 'numeric' }));
          const temps = res.list.slice(0, 8).map(data => Math.round(data.main.temp));
          return { labels, temps };
        })
      })
      .catch(err => console.error(err));
  }, [city]);

  return <>
    <Header date={date} onGetCityName={getCityNameHandler} />
    <WeatherSummary data={data} />
    <TemperaturesChart data={chartData} />
    <Temperatures temps={fiveDaysForecast} />
  </>
}

export default App;
