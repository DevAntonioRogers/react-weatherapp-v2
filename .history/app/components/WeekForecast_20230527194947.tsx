interface DayForecast {
  date: string;
  day: {
    condition: {
      icon: string;
      text: string;
    };
    maxtemp_f: number;
    mintemp_f: number;
  };
}

interface WeekForecastProps {
  data: {
    forecast?: {
      forecastday: DayForecast[];
    };
  };
}

const WeekForecast = ({ data }: WeekForecastProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 w-full">
      {data.forecast
        ? data.forecast.forecastday.map((day, index) => (
            <div
              key={index}
              className="bg-white/40 p-2 text-center rounded-lg flex  items-center italic font-bold gap-1 justify-center"
            >
              <p className="font-3xl">{new Date(day.date).toLocaleString("en-US", { weekday: "short" })}</p>
              <img className="w-50 h-50" src={day.day.condition.icon} alt={day.day.condition.text} />
              <div className="flex gap-2">
                <p>H {day.day.maxtemp_f.toFixed()}°</p>
                <p>L {day.day.mintemp_f.toFixed()}°</p>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default WeekForecast;
