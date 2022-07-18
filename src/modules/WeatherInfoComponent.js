import styled from "styled-components";
import sun from "../icons/temp.svg";
import humid from "../icons/humidity.svg";
import air from "../icons/wind.svg";
import preser from "../icons/pressure.svg";
import { WeatherIcon } from "./weatherIcons";

export const WeatherInfoIcons={
    Sunset:sun,
    Sunrise:sun,
    Humidity:humid,
    Wind:air,
    Pressure:preser

};


const WeatherCondition=styled.div`
display: flex;
flex-direction: row;
align-items: center;
width:100%;
justify-content: space-between;
margin:30px auto;

`;

const Condition=styled.span`
margin: 20px auto;
font-size: 14px;
& span{
    font-size: 28px;
    font-weight: bolder;
}
`;

const WeatherLogo = styled.img`
width:100px;
height:100px;
margin:5px auto;
`;

const Location=styled.span`
font-size: 28px;
font-weight: bold;
`;

const WeatherInfoLabel=styled.span`
font-size: 14px;
font-weight: bold;
margin:20px 25px 10px;
text-align: start;
width:90%;
`;

const WeatherInfoContainer=styled.div`
display: flex;
width: 90%;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
flex-wrap: wrap;
`;

const InfoContainer=styled.div`
display: flex;
margin:5px 10px;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
`;

const InfoIcon=styled.img`
width: 36px;
height:36px;
`;

const InfoLabel=styled.div`
display: flex;
flex-direction: column;
font-size: 14px;
margin:15px;
& span{
    font-size: 12px;
    text-transform: capitalize;
    font-weight: bold;
}
`;



const WeatherInfoComponent=(props)=>{
    const {name,value}=props;
    return(
        <InfoContainer>
            <InfoIcon  src={WeatherInfoIcons[name]}/>
            <InfoLabel>
               {value}
               <span>{name}</span>
            </InfoLabel>
        </InfoContainer>
    );
}


const WeatherComponent=(props)=>{
    const {weather} = props;
    const isDay=weather?.weather[0].icon?.includes('d');
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`;
    }
    return (
        <>
            <WeatherCondition>
                <Condition><span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>{`| ${weather?.weather[0].description}`}</Condition>
                <WeatherLogo src={WeatherIcon[weather?.weather[0].icon]} />
            </WeatherCondition>
            <Location>{`${weather?.name},${weather?.sys?.country}`}</Location>
            <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
            <WeatherInfoContainer>
                <WeatherInfoComponent name={isDay?"Sunset":"Sunrise"} value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}/>
                <WeatherInfoComponent name="Humidity" value={weather?.main?.humidity}/>
                <WeatherInfoComponent name="Wind" value={weather?.wind?.speed}/>
                <WeatherInfoComponent name="Pressure" value={weather?.wind?.pressure}/>
            </WeatherInfoContainer>
        </>
    );
}
export default WeatherComponent;