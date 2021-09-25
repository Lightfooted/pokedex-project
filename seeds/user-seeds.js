const { User } = require('../models');

const userdata = [
  {
    username: 'Ash',
    email: 'theverybest@fakemail.com',
    password: 'password123'
  },
  {
    username: 'Misty',
    email: 'psyducksucks@fakemail.com',
    password: 'password123'
  },
  {
    username: 'Professor Oak',
    email: 'neverendingpokedex@fakemail.com',
    password: 'password123'
  },
  {
    username: 'Brock',
    email: 'ladiesman@fakemail.com',
    password: 'password123'
  },
  {
    username: 'Jessie',
    email: 'todenouncetheevilsoftruthandlove@fakemail.com',
    password: 'password123'
  },
  {
    username: 'James',
    email: 'toextendourreachtothestarsabove@fakemail.com',
    password: 'password123'
  },
  {
    username: 'Gary',
    email: 'ijustdontlikeyou@fakemail.com',
    password: 'password123'
  },
  {
    username: 'Officer Jenny',
    email: 'ileftmymotorcycleatthefrontdesk@fakemail.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;