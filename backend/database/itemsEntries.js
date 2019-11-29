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
{ name: '2', default: false, category: 'accessories' },
{ name: '3', default: false, category: 'clothes' }];

// save multiple documents to the collection referenced by Book Model
Item.collection.insert(items, (err, docs) => {
  if (err) {
    return console.error(err);
  }
  console.log('Multiple documents inserted to Collection');
});

// Clothing
// Electronics
// Documents / financial
// Toiletries
// Miscellaneous

const defaultArray = ['passport',
  'boarding pass',
  'phone / charger',
  'MP3 player',
  'book / e-reader',
  'towel',
  'travel adapter',
  'money',
  'credit / debit card',
  'medication',
  'toothbrush / toothpaste',
  'shampoo / conditioner',
  'shower gel',
  'deoderant',
  'hairbrush',
  'shaving essentials',
  'sanitary essentials'];

function generateItemsArray(array) {
  let array = []



}


// City (Broken into business/leisure)
// business
// business wear
// comfortable outfit for travel
// laptop
// envelopes for receipts
// leisure
// Plastic bag for dirty clothes
// Power bank
// Sun glasses


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
