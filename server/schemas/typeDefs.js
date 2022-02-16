
const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
        userID: ID
        username: String
        email: String
        password: String
        journal: Journal
        
    }

    type Journal {
        journalID: ID
        Calendar: Calendar
        GymPlan: GymPlan
        FoodPlan: FoodPlan

    }
    
    type Calendar {
        calendarID: ID
        user: User
        events: [Int]
        
    }

    type GymPlan {
        gymPlanID: ID
        exercise: String
        sets: Int
        reps: Int
        weight: Int
        user: User
    }

    type FoodPlan {
        foodPlanID: ID
        name: String
        calories: Int
        servingSize: String
        user: User
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        me: User
        getJournal( journalID: ID!): Journal 
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth 
        addJournal(username: String!, email: String!, password: String!): Journal
        addCalendarEvent(calendarID: ID!, event: String!): Calendar
        removeCalendarEvent(calendarID: ID!, event: String!): Calendar
        addGymPlan(gymPlanID: ID!, exercise: String!): GymPlan
        removeGymPlan(gymPlanID: ID!, exercise: String!): GymPlan
        addFoodPlan(FoodPlanID: ID!, name: String!): FoodPlan
        removeFoodPlan(foodPlanID: ID!, name: String!): FoodPlan
    }
    `;

module.exports = typeDefs;
