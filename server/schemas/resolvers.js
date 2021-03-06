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

        addJournal: async (parent, { userID, username, email, password }) => {
            journalID: userID,
            {
                $set: { Journals: Journal },
            },
                { new: true };
            const journal = await Journal.create({ username: username, email: email, password: password }); //pass into it whatever Items we want to include in the journal object
            return journal;

        },

        addCalendarEvent: async (parent, { calendarID, event }) => {
            const calendar = await Calendar.findById({ _id: calendarID });
            calendar.events.push(event);
            calendar.save();
            return calendar;
        },

        removeCalendarEvent: async (parent, { calendarID, event }) => {
            const calendar = await Calendar.findById({ _id: calendarID });
            const index = calendar.events.indexOf(event);
            calendar.events.splice(index, 1);
            calendar.save();
            return calendar;
        },

        addGymPlan: async (parent, { GymPlanID, exercise }) => {
            const GymPlan = await GymPlan.findById({ _id: GymPlanID });
            GymPlan.exercises.push(exercise);
            exercise.save();
            return GymPlan;
        },

        removeGymPlan: async (parent, { GymPlanID, exercise }) => {
            const GymPlan = await GymPlan.findById({ _id: GymPlanID });
            const index = GymPlan.exercises.indexOf(exercise);
            GymPlan.exercises.splice(index, 1);
            exercise.save();
            return GymPlan;
        },

        addFoodPlan: async (parent, { FoodPlanID, name }) => {
            const FoodPlan = await FoodPlan.findById({ _id: FoodPlanID });
            FoodPlan.name.push(name);
            name.save();
            return FoodPlan;
        },

        removeFoodPlan: async (parent, { FoodPlanID, name }) => {
            const FoodPlan = await FoodPlan.findById({ _id: FoodPlanID });
            const index = FoodPlan.name.indexOf(name);
            FoodPlan.name.splice(index, 1);
            name.save();
            return FoodPlan;
        }


    },
};

