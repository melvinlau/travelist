const weatherServices = require('../weather-services');

describe('Weather Services', () => {
  describe('#getTemperatureTags', () => {
    test('tmperature tag for 1 day when temperature is -5 – cold', () => {
      expect(weatherServices.getTemperatureTags([5])).toEqual(['cold']);
    });
    test('temperature tag for 1 day when temperature is +30 – hot', () => {
      expect(weatherServices.getTemperatureTags([30])).toEqual(['hot']);
    });
    test('temperature tag for 5 days is hot', () => {
      expect(weatherServices.getTemperatureTags([30, 25, 32, 20, 30])).toEqual([
        'hot',
      ]);
    });
    test('temperature tag for 5 days is cold', () => {
      expect(weatherServices.getTemperatureTags([20, 5, -2, 10, 12])).toEqual([
        'cold',
      ]);
    });
  });
  describe('#getWeatherTags', () => {
    test('it filters the data and creates weather tags', () => {
      const input = [
        {
          avgtempC: '30',
          hourly: [
            {
              weatherDesc: [
                {
                  value: 'Clear',
                },
              ],
            },
            {
              weatherDesc: [
                {
                  value: 'Partly cloudy',
                },
              ],
            },
            {
              weatherDesc: [
                {
                  value: 'Partly cloudy',
                },
              ],
            },
            {
              weatherDesc: [
                {
                  value: 'Clear',
                },
              ],
            },
            {
              weatherDesc: [
                {
                  value: 'Sunny',
                },
              ],
            },
            {
              weatherDesc: [
                {
                  value: 'Sunny',
                },
              ],
            },
            {
              weatherDesc: [
                {
                  value: 'Sunny',
                },
              ],
            },
            {
              weatherDesc: [
                {
                  value: 'Clear',
                },
              ],
            },
          ],
        },
      ];
      const expected = ['hot', 'sunny'];
      expect(weatherServices.getWeatherTags(input)).toEqual(expected);
    });
  });

  describe('#avgTemperature', () => {
    test('average temperature of +4 and +6', () => {
      expect(weatherServices.avgTemperature([4, 6])).toBe(5);
    });
    test('average temperature of -4 and -6', () => {
      expect(weatherServices.avgTemperature([-4, -6])).toBe(-5);
    });
  });

  describe('#getWeatherDesc', () => {
    test('it returns an array of strings sunny and rainy', () => {
      const input = [
        {
          weatherDesc: [{ value: 'sunny' }],
        },
        {
          weatherDesc: [{ value: 'rainy' }],
        },
      ];
      expect(weatherServices.getWeatherDescription(input)).toEqual([
        'sunny',
        'rainy',
      ]);
    });
  });

  describe('#countedUnique', () => {
    test('Counts rainy/rainy/sunny as rainy: 2, sunny: 1', () => {
      const input = ['rainy', 'rainy', 'sunny'];
      const expected = [
        ['rainy', 2],
        ['sunny', 1],
      ];
      expect(weatherServices.countUnique(input)).toEqual(expected);
    });
    test('Counts rainy/rainy/sunny/snow/rainy/sunny as rainy: 3, sunny: 2, snow: 1', () => {
      const input = ['rainy', 'rainy', 'sunny', 'snow', 'rainy', 'sunny'];
      const expected = [
        ['rainy', 3],
        ['sunny', 2],
        ['snow', 1],
      ];
      expect(weatherServices.countUnique(input)).toEqual(expected);
    });
  });

  describe('#getTwoMaxItems', () => {
    // test('Find top two items for the weather tag array', () => {
    //   const input = [
    //     ['rainy', 3],
    //     ['sunny', 2],
    //     ['snow', 1],
    //   ];
    //   const expected = ['rainy', 'sunny'];
    //   expect(weatherServices.getTwoMaxItems(input)).toEqual(expected);
    // });

    test('Find top two items for array of 5 elements where top two are equal', () => {
      const input = [
        ['snow', 1],
        ['sunny', 2],
        ['rain', 1],
        ['fog', 1],
        ['cloudy', 2],
      ];
      const expected = ['sunny', 'cloudy'];
      expect(weatherServices.getTwoMaxItems(input)).toEqual(expected);
    });
  });
  describe('#getDescriptionTags', () => {
    test('Tag for rainy/rainy/rainy/rainy day is rainy', () => {
      const input = ['rainy', 'rainy', 'rainy', 'rainy'];
      expect(weatherServices.getDescriptionTags(input)).toEqual(['rainy']);
    });
  });
  describe('#getDate', () => {
    test('Extract month and day from the date and format them', () => {
      const input = new Date(2019, 0, 23);
      expect(weatherServices.getDate(input)).toEqual('01-23');
    });
  });
  describe('#filterWeather', () => {
    test.skip('Convert rain related tems to rainy', () => {
      const input = [
        'Light rain shower',
        'Drizzle',
        'Patchy rain possible',
        'Shower',
      ];
      const expected = ['rainy', 'rainy', 'rainy', 'rainy'];
      expect(weatherServices.filterWeather(input)).toEqual(expected);
    });
    test('Convert snow related terms to snowy', () => {
      const input = [
        'HEAVY SNOW',
        'Light snow',
        'Heavy blizzard',
        'moderate snow',
      ];
      const expected = ['snowy', 'snowy', 'snowy', 'snowy'];
      expect(weatherServices.filterWeather(input)).toEqual(expected);
    });
    test('Convert sun related terms to sunny', () => {
      const input = ['Clear', 'Sunny'];
      const expected = ['sunny', 'sunny'];
      expect(weatherServices.filterWeather(input)).toEqual(expected);
    });
  });
});
