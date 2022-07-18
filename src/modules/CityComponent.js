import React from "react";
import styled from "styled-components";
import perfect from "../icons/perfect-day.svg";

const WeatherLogo = styled.img`
width:140px;
height:140px;
margin:40px auto;
`;
const ChooseCityLabel = styled.span`
color:black;
font-size:18px;
font-weight: bold;
margin: 10px auto;
`;
const SearchBox = styled.form`
display:flex;
flex-direction:row;
border:black solid 1px;
border-radius: 2px;
color:black;
margin:20px auto;
& input{
    padding:10px;
    font:14px;
    border:none;
    outline:none;
    font-weight: bold;
}
& button{
    padding:10px;
    font:14px;
    color:white;
    background-color: black;
    border:none;
    outline:none;
    font-weight: bold;
}
`;
const Text=styled.span`
text-align: center;
font-size: small;
color:black;
& span{
    font-weight: bold;
}
`;

const CityComponent=(props)=>{
    const {updateCity, fetchWeather}=props;
    return(
        <>
            <WeatherLogo src={perfect} />
            <ChooseCityLabel>Find Climate of your city</ChooseCityLabel>
            <SearchBox onSubmit={fetchWeather}>
                <input placeholder="City"  onChange={(e)=>updateCity(e.target.value)}/>
                <button type="submit">Search</button>
            </SearchBox>
            <Text>Made by <span>Shubham</span></Text>
        </>
    );
}
export default CityComponent;