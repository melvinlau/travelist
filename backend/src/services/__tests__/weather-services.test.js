const weatherServices = require('../weather-services');

describe('Weather Services', () => {
  describe('#getWeatherTags', () => {
    test('tmperature tag for 1 day when temperature is -5 – cold', () => {
      expect(weatherServices.getTemperatureTags([5])).toBe('cold');
    });
    test('temperature tag for 1 day when temperature is +30 – hot', () => {
      expect(weatherServices.getTemperatureTags([30])).toBe('hot');
    });
    test('temperature tag for 5 days is hot', () => {
      expect(weatherServices.getTemperatureTags([30, 25, 32, 20, 30])).toBe(
        'hot',
      );
    });
    test('temperature tag for 5 days is cold', () => {
      expect(weatherServices.getTemperatureTags([20, 5, -2, 10, 12])).toBe(
        'cold',
      );
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

  describe('#avgTemperature', () => {
    test('average temperature of +4 and +6', () => {
      expect(weatherServices.avgTemperature([4, 6])).toBe(5);
    });
    test('average temperature of -4 and -6', () => {
      expect(weatherServices.avgTemperature([-4, -6])).toBe(-5);
    });
  });

  describe('#getWeatherDesc', () => {
    test('average temperature of +4 and +6', () => {
      expect(weatherServices.avgTemperature([4, 6])).toBe(5);
    });
    test('average temperature of -4 and -6', () => {
      expect(weatherServices.avgTemperature([-4, -6])).toBe(-5);
    });
  });
});
