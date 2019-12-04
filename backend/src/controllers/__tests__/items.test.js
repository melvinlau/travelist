const mongoose = require('mongoose');
const Item = require('../../models/item');
const itemsController = require('../items');

describe('Items tests', () => {
  beforeAll(async () => {
    const mongoDB = 'mongodb+srv://travel_team:Travel4545!@cluster0-0wz6h.mongodb.net/test?retryWrites=true&w=majority';
    mongoose.connect(mongoDB, { useNewUrlParser: true });
    await Item.remove({});
  });

  beforeEach(async () => {
    const item1 = new Item({
      name: 'Tshirt',
      category: 'clothes',
      activities: ['walking', 'beach'],
      weather: ['hot'],
    });
    await item1.save();
    const item2 = new Item({
      name: 'Boots',
      category: 'clothes',
      activities: ['walking', 'hiking'],
      weather: ['hot'],
    });
    await item2.save();
    const item3 = new Item({
      name: 'Bikini',
      category: 'clothes',
      activities: ['beach'],
      weather: ['hot', 'rain'],
    });
    await item3.save();
    const item4 = new Item({
      name: 'Scarf',
      category: 'clothes',
      activities: ['ski'],
      weather: ['cold', 'rain'],
    });
    await item4.save();
  });

  afterEach(async () => {
    await Item.remove({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });


  describe('Find items by activity', () => {
    it('returns any matching items with a single activity query', async () => {
      const foundItem = await Item.find({ activities: 'walking' });
      expect(foundItem.length).toEqual(2);
    });

    it('returns any matching items with multiple activity query', async () => {
      const foundItem = await Item.find({ activities: { $in: ['walking', 'beach'] } });

      expect(foundItem.length).toEqual(3);
      expect(foundItem[0].name).toEqual('Tshirt');
    });
  });

  describe('Get items by activity', () => {
    it('returns any matching items with multiple activity query', async () => {
      const expected = await itemsController.getItemsByActivity(['walking', 'hiking']);
      expect(expected.length).toEqual(2);
      expect(expected[0].name).toEqual('Tshirt');
      expect(expected[1].name).toEqual('Boots');
    });
  });

  describe('Find items by weather', () => {
    it('returns any matching items with a single activity query', async () => {
      const foundItem = await Item.find({ weather: 'hot' });
      expect(foundItem.length).toEqual(3);
    });

    it('returns any matching items with multiple activity query', async () => {
      const foundItem = await Item.find({ weather: { $in: ['cold', 'rain'] } });

      expect(foundItem.length).toEqual(2);
      expect(foundItem[0].name).toEqual('Bikini');
    });
  });

  describe('Get items by weather', () => {
    it('returns any matching items with multiple weather query', async () => {
      const expected = await itemsController.getItemsByWeather(['cold', 'rain']);
      expect(expected.length).toEqual(2);
      expect(expected[0].name).toEqual('Bikini');
      expect(expected[1].name).toEqual('Scarf');
    });
  });

  describe('Creates a custom item', () => {
    it('creates a custom item', async () => {
      const input = await itemsController.createCustomItem({ body: { name: 'Mirror', category: 'miscellaneous' } });
      const foundItem = await Item.findOne({ name: 'Mirror' });
      expect(foundItem.custom).toEqual(true);
    });
  });
});