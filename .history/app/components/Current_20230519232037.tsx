import React from "react";

const Current = ({ data }) => {
  return (
    <div className="current-weather-container">
      <div className="location-name">{data.location ? <h1>{data.location.name}</h1> : null}</div>

      <div>
        {data.current ? (
          <p className="current-weather">
            {data.current.temp_f.toFixed()}
            <span className="temp-circle">°</span>
          </p>
        ) : null}
        {data.current ? <span className="current-weather-condition">{data.current.condition.text}</span> : null}
      </div>
      <div>
        {data.forecast ? <span>High: {data.forecast.forecastday[0].day.maxtemp_f.toFixed()}°</span> : null}
        {data.forecast ? <span>Low: {data.forecast.forecastday[0].day.mintemp_f.toFixed()}°</span> : null}
      </div>
    </div>
  );
};

export default Current;
