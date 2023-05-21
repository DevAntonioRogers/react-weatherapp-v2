"use client";

import Conversion from "./components/Conversion";
import Current from "./components/Current";
import Input from "./components/Input";

import { useState } from "react";
import WeekForecast from "./components/WeekForecast";
import WeatherDetails from "./components/WeatherDetails";

export default function Home() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const url = `http://api.weatherapi.com/v1/forecast.json?key=538023bd3c43455084733202231905&q=${location}&days=7&aqi=yes&alerts=yes
  `;

  const handleSearch = async (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setData(data);
        setLocation("");
        setError("");
      } catch (error) {
        setError("City not found");
        setData({});
      }
    }
  };

  return (
    <div className="flex justify-center p-2 bg-cover h-screen bg-gradient-to-r from-blue-500 to-blue-300 overflow-x-scroll">
      <div className="bg-white/25 mx-24 w-full h-full rounded-lg flex flex-col">
        {/* SEARCH AND DEGREE CONVERSION */}
        <div className="flex justify-between items-center p-12">
          <Input handleSearch={handleSearch} location={location} setLocation={setLocation} />
          <Conversion />
        </div>

        {/* CURRENT WEATHER SECTION + 7 DAY FORECAST */}
        <div className="flex p-12 items-center justify-between">
          <Current data={data} />
          <WeekForecast data={data} />
        </div>

        {/* WEATHER DETAILS */}
        <div>
          <WeatherDetails />
        </div>
      </div>
    </div>
  );
}
