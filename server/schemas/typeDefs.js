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
        user: User
        Calendar: Calendar
        GymPlan: GymPlan
        FoodPlan: FoodPlan

    }
    
    type Calendar {
        calendarID: ID
        user: User
        events: [Event]
        
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
        foodID: ID
        name: String
        calories: Int
        servingSize: String
        user: User
    }

    type Auth {
        token: ID!
        user: User!
    }

    type Query {
        me: User
        getJournal( journalID: ID!): Journal 
    }

    type Mutation {
        register(registerInput: RegisterInput): Auth
        login(username: String!, password: String!): Auth        
        addJournal(): Journal
        addCalendarEvent(calendarID: ID!): Calendar
        removeCalendarEvent(calendarID: ID!): Calendar
        addGymPlan(): GymPlan
        removeGymPlan(gymPlanID: ID!): GymPlan
        addFoodPlan(): FoodPlan
        removeFoodPlan(foodID: ID!): FoodPlan
    }
    `;

module.exports = typeDefs;
