const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models/User');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, { user }) => {
            if (user) {
                const userData = await User.findById({ _id: user.id })
                    .select('-__v -password');
                return userData;
            }
            throw new AuthenticationError('You must be logged in!');
        },
        getJournal: async (parent, args, { user }) => {
            if (user) {
                const journalData = await User.findById({ _id: user.id })
                    .select('-__v -password');
                return journalData;
            }
            throw new AuthenticationError('You must be logged in!');
        },
    },

    Mutation: {
        register: async (parent, args) => {
            const user = await User.findOne({ username: args.username });
            if (user) {
                throw new AuthenticationError('User already exists!');
            }
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('User does not exist!');
            }

            const isValidPassword = await user.isCorrectPassword(password);

            if (!isValidPassword) {
                throw new AuthenticationError('Incorrect password!');
            }

            const token = signToken(user);

            return { token, user };
        },

    },
};