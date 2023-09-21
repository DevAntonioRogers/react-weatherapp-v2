import React from 'react';

import Home from './components/Home';

const page = () => {
  const weatherAPIKey = String(process.env.WEATHER_API_KEY);

  return (
    <Home weatherAPIKey={weatherAPIKey} />
  )
};

export default page;
