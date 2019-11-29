const fetch = require('node-fetch');

// async function getWeather(destination, dateFrom, dateTo) {
//   // function getWeather(destination, dateFrom, dateTo) {
//   const apiKey = process.env.WEATHER_API_KEY;
//   const apiUrl = `http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=${apiKey}&q=${destination}&format=json&date=2018-02-20&enddate=2018-02-25`;
// const dateFrom =
// const dateTo =
// const result = fetch(
//   `http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=${apiKey}&q=${destination}&format=json&date=2018-02-20&enddate=2018-02-25`,
// )
//   .then((response) => response.json())
//   .then((data) => data);
//   const result = fetch(apiUrl)
//     .then((res) => res.json())
//     .then((data) => data)
//     .catch((error) => {
//       throw error;
//     });
//   console.log(result);
//   return result;
// }

async function getWeather(destination, dateFrom, dateTo) {
  try {
    const apiKey = process.env.WEATHER_API_KEY;
    const data = await fetch(
      `http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=${apiKey}&q=${destination}&format=json&date=2018-02-20&enddate=2018-02-25`,
    );
    const result = await data.json();
    return result.data.weather;
  } catch (error) {
    throw error;
  }
}

function getWeatherTags(weather) {
  // get average temperatures and save into array
  // send array to get temperatureTag
  // get weather values and save into array
  // get descriptionTags
  // merge temperature and weather type arrays and return
}

function getTemperatureTags(temperatureArray) {
  // find an average temparature
  // if avg temp > 25 -> hot
  // if avg temp < 15 -> cold
}

function getDescriptionTags(descriptionArray) {
  // count number of elements that are rainy (drizzle, shower, etc)
  // count number of elements that are snowy
  // count number of sunny
  // push to the tag array
  // return tag array
}

exports.getWeather = getWeather;
