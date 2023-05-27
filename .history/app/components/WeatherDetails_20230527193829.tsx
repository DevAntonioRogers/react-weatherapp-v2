interface WeatherDetailsProps {
  data: {
    current?: {
      wind_mph: number;
      humidity: number;
      wind_dir: string;
      pressure_mb: number;
      feelslike_f: number;
      vis_km: number;
    };
    forecast?: {
      forecastday: {
        astro: {
          sunrise: string;
          sunset: string;
        };
      }[];
    };
  };
}

const WeatherDetails = ({ data }: WeatherDetailsProps) => {
  if (!data.current) {
    return null;
  }

  return (
    <div className="p-12">
      <h1 className="mb-4 text-2xl text-white italic font-bold">Weather Details</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center italic font-bold">
        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl">
            <h3>Wind Speed</h3>
            <h3
              className="text-white bg-black/25 rounded-xl mt-1"
              aria-label={`Wind Speed: ${data.current.wind_mph} mph`}
            >
              {data.current.wind_mph} mph
            </h3>
          </div>
        </div>
        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl">
            <h3>Humidity</h3>
            <h3 className="text-white bg-black/25 rounded-xl mt-1" aria-label={`Humidity: ${data.current.humidity}%`}>
              {data.current.humidity}%
            </h3>
          </div>
        </div>
        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl">
            <h3>Wind Direction</h3>
            <h3
              className="text-white bg-black/25 rounded-xl mt-1"
              aria-label={`Wind Direction: ${data.current.wind_dir}`}
            >
              {data.current.wind_dir}
            </h3>
          </div>
        </div>
        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl">
            <h3>Sunrise</h3>
            <h3
              className="text-white bg-black/25 rounded-xl mt-1 px-2"
              aria-label={`Sunrise: ${data.forecast?.forecastday[0]?.astro.sunrise}`}
            >
              {data.forecast?.forecastday[0]?.astro.sunrise}
            </h3>
          </div>
        </div>
        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl">
            <h3>Sunset</h3>
            <h3
              className="text-white bg-black/25 rounded-xl mt-1 px-2"
              aria-label={`Sunset: ${data.forecast?.forecastday[0]?.astro.sunset}`}
            >
              {data.forecast?.forecastday[0]?.astro.sunset}
            </h3>
          </div>
        </div>
        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl">
            <h3>Air Pressure</h3>
            <h3
              className="text-white bg-black/25 rounded-xl mt-1"
              aria-label={`Air Pressure: ${data.current.pressure_mb} hPa`}
            >
              {data.current.pressure_mb} hPa
            </h3>
          </div>
        </div>
        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl">
            <h3>Feels Like</h3>
            <h3
              className="text-white bg-black/25 rounded-xl mt-1"
              aria-label={`Feels Like: ${data.current.feelslike_f}°`}
            >
              {data.current.feelslike_f}°
            </h3>
          </div>
        </div>
        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
          <div className="text-2xl">
            <h3>Visibility</h3>
            <h3 className="text-white bg-black/25 rounded-xl mt-1" aria-label={`Visibility: ${data.current.vis_km} km`}>
              {data.current.vis_km} km
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
