import { Fragment } from 'react';

import HourlyList from '../HourlyList/HourlyList';
import classes from "./CurrentDay.module.css";
import { mapToDay } from '../../utility/dateMap';
import { formatTimeString } from '../../utility/formatTime';

const CurrentDay = props => {
  const date = new Date(props.currentData.dt * 1000);
  const timeString = formatTimeString(props.currentData.dt);

  return (
    <Fragment>
      <div className={classes.CurrentDay}>
        <h1>{props.locationData}</h1>
        <h2 className={classes.Day}>{mapToDay(date.getDay())} {timeString}</h2>
        <h2 className={classes.CurrentTemp}>{Math.round(props.currentData.temp)}&deg;</h2>
        <div className={classes.Grid}>
          <div>
            <h3>Feels</h3>
            <h3>{Math.round(props.currentData.feels_like)}&deg;</h3>
          </div>
          <div className={classes.WeatherImage}>
            <img src={`http://openweathermap.org/img/wn/${props.currentData.weather[0].icon}@4x.png`} alt={props.currentData.weather[0].description} />
            <h3>{props.currentData.weather[0].description}</h3>
          </div>
          <div>
            <h3>Humidity</h3>
            <h3>{props.currentData.humidity}&#37;</h3>
          </div>
        </div>
      </div>
      <HourlyList hourlyArray={props.hourlyArray}/>
    </Fragment>
  )
}

export default CurrentDay;