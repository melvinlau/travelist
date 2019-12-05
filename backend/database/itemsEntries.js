const mongoose = require('mongoose');
const Item = require('../src/models/item');

// connect to database
mongoose
  .connect(
    'mongodb+srv://travel_team:Travel4545!@cluster0-0wz6h.mongodb.net/development?retryWrites=true&w=majority',
    { useNewUrlParser: true },
    () => console.log('connected to database'),
  )
  .catch((err) => {
    console.log(err);
  });

// documents array
const defaultItems = [
  { name: 'Passport', default: true, category: 'documents' },
  { name: 'Boarding pass', default: true, category: 'documents' },
  { name: 'Phone and charger', default: true, category: 'electronics' },
  { name: 'MP3 player', default: true, category: 'electronics' },
  { name: 'Book / E-Reader', default: true, category: 'miscellaneous' },
  { name: 'Towel', default: true, category: 'toiletries' },
  { name: 'Travel adapter', default: true, category: 'electronics' },
  { name: 'Money', default: true, category: 'documents' },
  { name: 'Credit / debit card', default: true, category: 'documents' },
  { name: 'Medication', default: true, category: 'miscellaneous' },
  { name: 'Toothbrush and toothpaste', default: true, category: 'toiletries' },
  { name: 'Shampoo and conditioner', default: true, category: 'toiletries' },
  { name: 'Shower gel', default: true, category: 'toiletries' },
  { name: 'Deodorant', default: true, category: 'toiletries' },
  { name: 'Hairbrush', default: true, category: 'toiletries' },
  { name: 'Shaving essentials', default: true, category: 'toiletries' },
  { name: 'Sanitary essentials', default: true, category: 'toiletries' },
  { name: 'Socks', default: true, category: 'clothing' },
  { name: 'Underwear', default: true, category: 'clothing' }];

const businessItems = [
  { name: 'Businesswear', category: 'clothing', activities: ['business'] },
  { name: 'Comfortable travel outfit', category: 'clothing', activities: ['business'] },
  { name: 'Pyjamas', category: 'clothing', activities: ['business'] },
  { name: 'Laptop', category: 'electronics', activities: ['business'] },
  { name: 'Envelope for receipts', category: 'documents', activities: ['business'] }];

const leisureItems = [
  { name: 'Plastic bag for used clothes', category: 'misc', activities: ['leisure'] },
  { name: 'Power bank', category: 'electronics', activities: ['leisure'] },
  { name: 'Camera', category: 'clothing', activities: ['leisure'] },
  { name: 'Sunglasses', category: 'accessories', activities: ['leisure', 'hiking', 'beach'] }];

const weatherItems = [
  { name: 'Loose, summer tops', category: 'clothing', weather: ['hot'] },
  { name: 'Loose, summer bottoms', category: 'clothing', activities: ['hot'] },
  { name: 'Long sleeve tops', category: 'clothing', weather: ['moderate'] },
  { name: 'Trousers/jeans', category: 'clothing', weather: ['moderate'] },
  { name: 'Raincoat / poncho', category: 'clothing', weather: ['rainy'] },
  { name: 'Umbrella', category: 'misc', weather: ['rainy'] },
  { name: 'Thermal tops', category: 'clothing', weather: ['snowy', 'skiing'] },
  { name: 'Beanie', category: 'accessories', weather: ['snowy', 'cold'] },
  { name: 'Coat', category: 'clothing', weather: ['cold', 'snowy'] },
  { name: 'Winter tops', category: 'clothing', weather: ['cold'] },
  { name: 'Winter bottoms', category: 'clothing', weather: ['cold'] },
  { name: 'Scarf', category: 'accessories', weather: ['cold', 'skiing', 'snowy'] },
  { name: 'Gloves', category: 'accessories', weather: ['cold', 'hiking', 'snowy'] },
];

const hikingItems = [
  { name: 'Sun cream', category: 'toiletries', activities: ['hiking', 'beach', 'skiing'] },
  { name: 'Waterproof jacket', category: 'clothing', activities: ['hiking', 'skiing', 'snowy'] },
  { name: 'Torch', category: 'electronics', activities: ['hiking'] },
  {
    name: 'Jacket', category: 'clothing', activities: ['hiking'], weather: ['moderate'],
  },
  { name: 'Hat', category: 'accessories', activities: ['hiking', 'skiing'] },
  { name: 'Matches or lighter', category: 'miscellaneous', activities: ['hiking'] },
  { name: 'Water bottle', category: 'miscellaneous', activities: ['hiking', 'skiing'] },
  { name: 'Bugspray', category: 'miscellaneous', activities: ['hiking', 'beach'] },
  { name: 'Snacks', category: 'miscellaneous', activities: ['hiking'] },
  { name: 'Hiking boots', category: 'clothing', activities: ['hiking'] }];

const beachItems = [
  { name: 'Swimwear', category: 'clothing', activities: ['beach'] },
  { name: 'After sun lotion', category: 'toiletries', activities: ['beach'] },
  { name: 'Flip flops', category: 'clothing', activities: ['beach'] },
  { name: 'Shorts', category: 'clothing', activities: ['beach'] },
  { name: 'Beach towel', category: 'miscellaneous', activities: ['beach'] },
  { name: 'Sun hat', category: 'clothing', activities: ['beach'] },
];

const skiItems = [
  { name: 'Ski boots', category: 'clothing', activities: ['skiing'] },
  { name: 'Goggles', category: 'accessories', activities: ['skiing'] },
  { name: 'Skiwear', category: 'clothing', activities: ['skiing'] },
  { name: 'Ski gloves', category: 'accessories', activities: ['skiing'] },
  { name: 'Ski socks', category: 'accessories', activities: ['skiing'] },
  { name: 'Thermal bottoms', category: 'clothing', activities: ['skiing'] },
  { name: 'Lip balm', category: 'miscellaneous', activities: ['skiing'] },
  { name: 'Skis', category: 'miscellaneous', activities: ['skiing'] },
  { name: 'Ski poles', category: 'miscellaneous', activities: ['skiing'] },
  { name: 'Walking boots', category: 'clothing', activities: ['skiing'] }];

// save multiple documents to the collection referenced by Book Model
Item.collection.insert(defaultItems, (err, docs) => {
  if (err) {
    return console.error(err);
  }
  console.log('Default items inserted to Collection');
});

Item.collection.insert(businessItems, (err, docs) => {
  if (err) {
    return console.error(err);
  }
  console.log('Business items inserted to Collection');
});

Item.collection.insert(leisureItems, (err, docs) => {
  if (err) {
    return console.error(err);
  }
  console.log('Leisure items inserted to Collection');
});

Item.collection.insert(weatherItems, (err, docs) => {
  if (err) {
    return console.error(err);
  }
  console.log('Weather items inserted to Collection');
});

Item.collection.insert(hikingItems, (err, docs) => {
  if (err) {
    return console.error(err);
  }
  console.log('Hiking items inserted to Collection');
});

Item.collection.insert(beachItems, (err, docs) => {
  if (err) {
    return console.error(err);
  }
  console.log('Beach items inserted to Collection');
});

Item.collection.insert(skiItems, (err, docs) => {
  if (err) {
    return console.error(err);
  }
  console.log('Ski items inserted to Collection');
});