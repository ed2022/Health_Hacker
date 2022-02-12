const connection = require('../config/connection.js');
const { usernames, emails, thoughts } = require('./data');
const { User, Thought } = require('../models')


const user = [];
const userThought = [];
insertUsers();
insertThoughts();


function insertUsers() {
    for (let i = 0; i < usernames.length; i++) {
        const userObj = {
            username: usernames[i],
            email: emails[i]
        }
        user.push(userObj)
    }
};

function insertThoughts() {
    for (let i = 0; i < thoughts.length; i++) {
        const thought = thoughts[i];
        const thoughtObj = {
            thoughtText: thought.thoughtText,
            username: thought.username,
        }
        userThought.push(thoughtObj)
    }
};


connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');


    await User.deleteMany({});


    await Thought.deleteMany({});

    await User.insertMany(user);

    await Thought.insertMany(userThought);

    console.table(user);
    console.table(userThought);
    console.info('Seeding complete! 🌱');
    process.exit(0);


});