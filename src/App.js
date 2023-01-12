import React from 'react';
import Header from './components/layout/Header';
import Temperatures from './components/temperatures/Temperatures';
import TemperaturesChart from './components/temperaturesChart/TemperaturesChart';
import WeatherSummary from './components/weatherSummary/WeatherSummary';

function App() {
  return <>
    <Header />
    <WeatherSummary />
    <TemperaturesChart />
    <Temperatures />
  </>
}

export default App;
