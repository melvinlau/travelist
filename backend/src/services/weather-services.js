/* eslint-disable no-useless-catch */
const fetch = require('node-fetch');
const HttpError = require('../models/http-error');

async function getWeather(destination, dateFrom, dateTo) {
  let result;
  try {
    const apiKey = process.env.WEATHER_API_KEY;
    const data = await fetch(
      `http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=${apiKey}&q=${destination}&format=json&date=2018-02-20&enddate=2018-02-21`,
    );
    result = await data.json();
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not connect to weather API',
      500,
    );
    throw error;
  }
  getWeatherTags(result.data.weather);
}

function getWeatherTags(weather) {
  // get average temperatures and save into array
  const temperature = [];
  const description = [];
  weather.map((day) => {
    temperature.push(parseInt(day.avgtempC, 10));
    description.push(...getWeatherDesc(day.hourly));
  });
  console.log(temperature);
  getTemperatureTags(temperature);
  return data;

  // send array to get temperatureTag
  // get weather values and save into array
  // get descriptionTags
  // merge temperature and weather type arrays and return
}

function getWeatherDesc(array) {
  const tags = [];
  array.map((item) => {
    tags.push(item.weatherDesc[0].value);
  });
  // console.log(tags);
  return tags;
}

function getTemperatureTags(temperature) {
  const avgTemperature = temperature =>
    temperature.reduce((a, b) => a + b, 0) / temperature.length;
  const avgTemp = avgTemperature(temperature);
  // find an average temparature
  // if avg temp > 25 -> hot
  // if avg temp < 15 -> cold
  if (avgTemp > 25) {
    return "hot";
  } if (avgTemp < 12) {
    return "cold";
  }
}

function getDescriptionTags(descriptionArray) {
  // count number of elements that are rainy (drizzle, shower, etc)
  // count number of elements that are snowy
  // count number of sunny
  // push to the tag array
  // return tag array
}

exports.getWeather = getWeather;
