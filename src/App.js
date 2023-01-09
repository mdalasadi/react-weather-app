import React from 'react';
import Header from './components/layout/Header';
import Temperatures from './components/temperatures/Temperatures';
import WeatherSummary from './components/weatherSummary/WeatherSummary';

function App() {
  return <>
    <Header />
    <WeatherSummary />
    <Temperatures />
  </>
}

export default App;
