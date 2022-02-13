const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        id: ID
        username: String
        email: String
        password: String
        profile: Profile
    }

    type Profile {
        id: ID
        user: User
        calendar: Calendar

    }
    
    type Calendar {

    }

    type Workout {
    
    }

    type Auth {
        token: ID!
        user: User!
    }

    type Query {
    
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        updateProfile(): Profile
        updateCalendar(): Calendar
        updateWorkout(): Workout


    }
    `;

module.exports = typeDefs;