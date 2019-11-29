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
      weather: ['hot'],
    });
    await item3.save();
    const item4 = new Item({
      name: 'Scarf',
      category: 'clothes',
      activities: ['ski'],
      weather: ['hot'],
    });
    await item4.save();
  });

  afterEach(async () => {
    await Item.remove({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });


  describe('Find items', () => {
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
      const actual = ['Boots', 'Tshirt'];
      expect(expected).toEqual(expect.arrayContaining(actual));
    });
  });
});
