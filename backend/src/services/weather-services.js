async function getWeather(destination, dateFrom, dateTo) {
  console.log(process.env.WEATHER_API_KEY);

  const apiKey = process.env.WEATHER_API_KEY;
  // const dateFrom =
  // const dateTo =
  const result = fetch(
    `http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=${apiKey}&q=${destination}&format=json&date=2018-02-20&enddate=2018-02-25`,
  )
    .then((response) => response.json())
    .then((data) => data);
  return result;
}

exports.getWeather = getWeather;
