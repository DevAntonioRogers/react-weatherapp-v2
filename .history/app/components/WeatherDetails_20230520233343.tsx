import AirIcon from "@mui/icons-material/Air";
const WeatherDetails = () => {
  return (
    <div className="p-12">
      <h1 className="mb-4 text-2xl text-white">Weather Details</h1>

      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="bg-white/50 flex p-4">
          <div className="text-2xl">
            <h3>Wind</h3>
            <h3>17 km/h</h3>
          </div>
          <div className="text-white ">
            <AirIcon fontSize="90rem" />
          </div>
        </div>
        <div className="bg-white/50 flex p-4">
          <div className="text-2xl">
            <h3>Wind</h3>
            <h3>17 km/h</h3>
          </div>
          <div className="text-white text-3xl">
            <AirIcon />
          </div>
        </div>
        <div className="bg-white/50 flex p-4">
          <div className="text-2xl">
            <h3>Wind</h3>
            <h3>17 km/h</h3>
          </div>
          <div className="text-white text-3xl">
            <AirIcon />
          </div>
        </div>
        <div className="bg-white/50 flex p-4">
          <div className="text-2xl">
            <h3>Wind</h3>
            <h3>17 km/h</h3>
          </div>
          <div className="text-white text-3xl">
            <AirIcon />
          </div>
        </div>
        <div className="bg-white/50 flex p-4">
          <div className="text-2xl">
            <h3>Wind</h3>
            <h3>17 km/h</h3>
          </div>
          <div className="text-white text-3xl">
            <AirIcon />
          </div>
        </div>
        <div className="bg-white/50 flex p-4">
          <div className="text-2xl">
            <h3>Wind</h3>
            <h3>17 km/h</h3>
          </div>
          <div className="text-white text-3xl">
            <AirIcon />
          </div>
        </div>
        <div className="bg-white/50 flex p-4">
          <div className="text-2xl">
            <h3>Wind</h3>
            <h3>17 km/h</h3>
          </div>
          <div className="text-white text-3xl">
            <AirIcon />
          </div>
        </div>
        <div className="bg-white/50 flex p-4">
          <div className="text-2xl">
            <h3>Wind</h3>
            <h3>17 km/h</h3>
          </div>
          <div className="text-white text-3xl">
            <AirIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
