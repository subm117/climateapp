import React ,{ useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CityComponent from './modules/CityComponent';
import WeatherComponent from './modules/WeatherInfoComponent';

const Container = styled.div`
display:flex;
flex-direction:column;
margin:auto;
align-items:center;
box-shadow:0 3px 6px 0 #555;
padding:20px 10px;
border-radius:4px;
width:380px;
background-color:white;
font-family: Montserrat;
`
const Applabel=styled.span`
color:black;
font-size:18px;
font-weight:bold;
`



function App() {
  const [city,updateCity]=useState();
  const [weather,updateWeather]=useState();

  const fetchWeather=async(e)=>{
    e.preventDefault();
    const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9572c797f0ebc44472d0bc48b5e801b7`)
    updateWeather(response.data);
  }
  return (
    <Container>
      <Applabel>Weather App</Applabel>
      {weather?
      <WeatherComponent weather={weather} />:
      <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      }
    </Container>
  );
}

export default App;
