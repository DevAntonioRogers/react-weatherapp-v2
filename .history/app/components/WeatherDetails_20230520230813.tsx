import AirIcon from "@mui/icons-material/Air";
const WeatherDetails = () => {
  return (
    <div>
      <h1>Weather Details</h1>

      <div className=" grid grid-cols-[200px_minmax(900px,_1fr)_100px]">
        <div>
          <div className="bg-white/90">
            <h3>Wind</h3>
            <h3>17 km/h</h3>
          </div>
          <AirIcon />
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
