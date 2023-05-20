const WeekForecast = ({ data }) => {
  return (
    <div className="forecast-container">
      <div className="forecast-inner-container">
        {data.forecast
          ? data.forecast.forecastday.map((day, index) => (
              <div key={index} className="forecast-day">
                <p className="forecast-date">{new Date(day.date).toLocaleString("en-US", { weekday: "short" })}</p>
                <img className="forecast-icon" src={day.day.condition.icon} alt={day.day.condition.text} />
                <div className="forecast-temps">
                  <p className="forecast-temp-high">H {day.day.maxtemp_f.toFixed()}°</p>
                  <p className="forecast-temp-low">L {day.day.mintemp_f.toFixed()}°</p>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default WeekForecast;
