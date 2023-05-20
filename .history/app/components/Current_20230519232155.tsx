import React from "react";

const Current = ({ data }) => {
  return (
    <div>
      <div>{data.location ? <h1>{data.location.name}</h1> : null}</div>
      <div>
        {data.current ? (
          <p>
            {data.current.temp_f.toFixed()}
            <span>°</span>
          </p>
        ) : null}
        {data.current ? <span>{data.current.condition.text}</span> : null}
      </div>
      <div>
        {data.forecast ? <span>High: {data.forecast.forecastday[0].day.maxtemp_f.toFixed()}°</span> : null}
        {data.forecast ? <span>Low: {data.forecast.forecastday[0].day.mintemp_f.toFixed()}°</span> : null}
      </div>
    </div>
  );
};

export default Current;
