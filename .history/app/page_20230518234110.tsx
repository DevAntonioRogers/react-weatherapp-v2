import Conversion from "./components/Conversion";
import Current from "./components/Current";
import Input from "./components/Input";

import { useState } from "react";

export default function Home() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  return (
    <div className="flex justify-center p-2 bg-cover h-screen bg-gradient-to-r from-blue-500 to-blue-300">
      <div className="bg-white/25 mx-24 w-full rounded-lg p-12 flex flex-col">
        {/* SEARCH AND DEGREE CONVERSION */}
        <div className="flex justify-between items-center">
          <Input />
          <Conversion />
        </div>

        {/* CURRENT WEATHER SECTION */}
        <Current />
      </div>
    </div>
  );
}
