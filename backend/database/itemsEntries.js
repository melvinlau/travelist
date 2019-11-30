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
const defaultItems = [{ name: 'Passport', default: true, category: 'Documents' },
  { name: 'Boarding pass', default: true, category: 'Documents' },
  { name: 'Phone and charger', default: true, category: 'Electronics' },
  { name: 'MP3 player', default: true, category: 'Electronics' },
  { name: 'Book / E-Reader', default: true, category: 'Misc' },
  { name: 'Towel', default: true, category: 'Toiletries' },
  { name: 'Travel adapter', default: true, category: 'Electronics' },
  { name: 'Money', default: true, category: 'Documents' },
  { name: 'Credit / debit card', default: true, category: 'Documents' },
  { name: 'Medication', default: true, category: 'Misc' },
  { name: 'Toothbrush and toothpaste', default: true, category: 'Toiletries' },
  { name: 'Shampoo and conditioner', default: true, category: 'Toiletries' },
  { name: 'Shower gel', default: true, category: 'Toiletries' },
  { name: 'Deoderant', default: true, category: 'Toiletries' },
  { name: 'Hairbrush', default: true, category: 'Toiletries' },
  { name: 'Shaving essentials', default: true, category: 'Toiletries' },
  { name: 'Sanitary essentials', default: true, category: 'Toiletries' }];

const businessItems = [{ name: 'Businesswear', category: 'Clothing', activities: ['business'] },
  { name: 'Comfortable travel outfit', category: 'Clothing', activities: ['business'] },
  { name: 'Pyjamas', category: 'Clothing', activities: ['business'] },
  { name: 'Laptop', category: 'Electronics', activities: ['business'] },
  { name: 'Envelope for receipts', category: 'Documents', activities: ['business'] }];

const leisureItems = [{ name: 'Plastic bag for used clothes', category: 'Misc', activities: ['leisure'] },
  { name: 'Power bank', category: 'Electronics', activities: ['leisure'] },
  { name: 'Camera', category: 'Clothing', activities: ['leisure'] },
  { name: 'Sun glasses', category: 'Accessories', activities: ['leisure'] }];

const hotItems = [{ name: 'Loose, summer tops', category: 'Clothing', weather: ['hot'] },
  { name: 'Loose, summer bottoms', category: 'Clothing', activities: ['hot'] }];

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

// Default item list

// passport
// boarding pass
// phone / charger
// MP3 player
// book / e-reader
// towel
// travel adapter
// money
// credit / debit card
// medication
// toothbrush / toothpaste
// shampoo / conditioner
// shower gel
// deoderant
// hairbrush
// shaving essentials
// sanitary essentials

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
