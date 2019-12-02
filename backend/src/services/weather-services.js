/* eslint-disable no-loop-func */
/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-const */
/* eslint-disable no-useless-catch */
const fetch = require('node-fetch');
const HttpError = require('../models/http-error');

async function getWeather(destination, dateFrom, dateTo) {
  let result;
  // const from = formatDate(dateFrom);
  // const to = formatDate(dateTo);
  const from = dateFrom.substring(5, 10);
  const to = dateTo.substring(5, 10);

  try {
    const apiKey = process.env.WEATHER_API_KEY;
    const url = `http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=${apiKey}&q=${destination}&format=json&date=2018-${from}&enddate=2018-${to}`;
    const data = await fetch(url);
    // console.log(data);
    result = await data.json();
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not connect to weather API',
      500,
    );
    throw error;
  }
  return getWeatherTags(result.data.weather);
}

const getWeatherDescription = (array) => {
  const tags = [];
  array.map((item) => {
    tags.push(item.weatherDesc[0].value);
  });
  return tags;
};

const avgTemperature = (temperature) => temperature.reduce((a, b) => a + b, 0) / temperature.length;

const getTemperatureTags = (temperature) => {
  const avgTemp = avgTemperature(temperature);
  if (avgTemp > 25) {
    return ['hot'];
  } else if (avgTemp < 12) {
    return ['cold'];
  } else {
    return ['moderate'];
  }
};

const countUnique = (array) => {
  const uniqueItems = Array.from(new Set(array));
  const countedUnique = [];

  uniqueItems.map((unique) => {
    const result = [];
    let counter = 0;
    result.push(unique);
    for (let i = 0; i < array.length; ++i) {
      if (array[i] === unique) {
        counter += 1;
      }
    }
    result.push(counter);
    countedUnique.push(result);
  });
  return countedUnique;
};

const getTwoMaxItems = (array) => {
  const topTwo = [];
  let weatherCount = array;
  let max;

  for (let i = 0; i < 2; ++i) {
    if (weatherCount.length === 0) {
      break;
    }
    max = weatherCount[0][1];
    for (let i = 0; i < weatherCount.length; ++i) {
      if (weatherCount[i][1] > max) {
        max = weatherCount[i][1];
      }
    }
    const found = weatherCount.find((element) => element[1] === max);
    topTwo.push(found[0]);
    weatherCount = weatherCount.filter((item) => item !== found);
  }

  return topTwo;
};

const filterWeather = (array) => {
  let filteredItems;
  filteredItems = array;
  filteredItems.map((item, index) => {
    const string = item.toLowerCase();
    if (
      string.includes('rain')
      || string.includes('shower')
      || string.includes('drizzle')
    ) {
      filteredItems[index] = 'rainy';
    } else if (
      string.includes('snow')
      || string.includes('snowy')
      || string.includes('blizzard')
    ) {
      filteredItems[index] = 'snowy';
    } else if (string.includes('sunny') || string.includes('clear')) {
      filteredItems[index] = 'sunny';
    } else {
      filteredItems[index] = 'other';
    }
  });

  return filteredItems.filter((value) => value !== 'other');
};

const getDescriptionTags = (array) => {
  const filteredWeather = filterWeather(array);
  const countedItems = countUnique(filteredWeather);
  return getTwoMaxItems(countedItems);
};

function getWeatherTags(weather) {
  const temperature = [];
  const description = [];
  weather.map((day) => {
    temperature.push(parseInt(day.avgtempC, 10));
    description.push(...getWeatherDescription(day.hourly));
  });
  const tempTags = getTemperatureTags(temperature);
  const descTags = getDescriptionTags(description);
  return [...tempTags, ...descTags];
}

const formatDate = (date) => {
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const newDate = `${mm}-${dd}`;
  return newDate;
};

exports.formatDate = formatDate;
exports.getWeatherTags = getWeatherTags;
exports.filterWeather = filterWeather;
exports.getTwoMaxItems = getTwoMaxItems;
exports.countUnique = countUnique;
exports.getDescriptionTags = getDescriptionTags;
exports.getTemperatureTags = getTemperatureTags;
exports.avgTemperature = avgTemperature;
exports.getWeatherDescription = getWeatherDescription;
exports.getWeather = getWeather;
