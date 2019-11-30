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
const defaultItems = [{ name: 'Passport', default: true, category: 'documents' },
  { name: 'Boarding pass', default: true, category: 'documents' },
  { name: 'Phone and charger', default: true, category: 'dlectronics' },
  { name: 'MP3 player', default: true, category: 'electronics' },
  { name: 'Book / E-Reader', default: true, category: 'Misc' },
  { name: 'Towel', default: true, category: 'toiletries' },
  { name: 'Travel adapter', default: true, category: 'electronics' },
  { name: 'Money', default: true, category: 'documents' },
  { name: 'Credit / debit card', default: true, category: 'documents' },
  { name: 'Medication', default: true, category: 'misc' },
  { name: 'Toothbrush and toothpaste', default: true, category: 'toiletries' },
  { name: 'Shampoo and conditioner', default: true, category: 'toiletries' },
  { name: 'Shower gel', default: true, category: 'toiletries' },
  { name: 'Deoderant', default: true, category: 'toiletries' },
  { name: 'Hairbrush', default: true, category: 'toiletries' },
  { name: 'Shaving essentials', default: true, category: 'toiletries' },
  { name: 'Sanitary essentials', default: true, category: 'toiletries' },
  { name: 'Socks', default: true, category: 'clothing' },
  { name: 'Underwear', default: true, category: 'clothing' }];

const businessItems = [{ name: 'Businesswear', category: 'clothing', activities: ['business'] },
  { name: 'Comfortable travel outfit', category: 'clothing', activities: ['business'] },
  { name: 'Pyjamas', category: 'clothing', activities: ['business'] },
  { name: 'Laptop', category: 'electronics', activities: ['business'] },
  { name: 'Envelope for receipts', category: 'documents', activities: ['business'] }];

const leisureItems = [{ name: 'Plastic bag for used clothes', category: 'misc', activities: ['leisure'] },
  { name: 'Power bank', category: 'electronics', activities: ['leisure'] },
  { name: 'Camera', category: 'clothing', activities: ['leisure'] },
  { name: 'Sun glasses', category: 'accessories', activities: ['leisure'] }];

const hotItems = [{ name: 'Loose, summer tops', category: 'clothing', weather: ['hot'] },
  { name: 'Loose, summer bottoms', category: 'clothing', activities: ['hot'] }];

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

Item.collection.insert(hotItems, (err, docs) => {
  if (err) {
    return console.error(err);
  }
  console.log('Business items inserted to Collection');
});


// Clothing
// Electronics
// Documents / financial
// Toiletries
// Miscellaneous

// Beach holiday (general)
// Swimwear
// Suncream
// After sun lotion
// Flip flops
// Sunglasses
// Shorts
// Towel
// Sun hat
// Insect repellent
// Beach blanket


// Sports holiday

// Skiing

// waterproof jacket
// ski boots
// goggles
// skiwear
// ski gloves
// scarf
// ski socks
// thermal tops
// thermal bottoms
// sun cream
// lip balm
// skis
// ski poles
// walking boots
// hat
// water bottle

// Hiking

// sun cream
// waterproof jacket
// torch
// first aid supplies
// hiking boots
// jacket
// hat
// gloves
// sunglasses
// matches or lighter
// water bottle
// bugspray
// snacks

// Length-dependent items

// socks
// underwear
// summer tops
// winter tops
// summer bottoms
// winter bottoms
// Weather

// ### Sunny

// sun cream
// after sun lotion
// sunglasses
// hat
// Rainy
// raincoat / poncho
// umbrella
// Snowy
// scarf
// coat
// waterproof jacket
// gloves
// thermal tops
// beanie

// ### Hot

// loose, cotton tops
// loose, summer bottoms

// Cold
// coat
// winter tops
// winter bottoms
// beanie
// scarf
// gloves
// thermal tops
