import AirIcon from "@mui/icons-material/Air";
const WeatherDetails = () => {
  return (
    <div>
      <h1>Weather Details</h1>

      <div className=" grid grid-cols-[200px_minmax(900px,_1fr)_100px]">
        <div className="bg-white/50 flex p-4">
          <div className="text-2xl">
            <h3>Wind</h3>
            <h3>17 km/h</h3>
          </div>
          <span>
            <AirIcon />
          </span>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
