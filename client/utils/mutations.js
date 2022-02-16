import { gql } from "@apollo/client";

export const ADD_USER = gql`
mutation register($username: String!, $email: String!, $password: String!) {
    register(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
        journal
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!, $email: String!) {
    login(username: $username, password: $password, email: $email) {
      token
      user {
        _id
        username
        password
      }
    }
  }
`;

export const ADD_JOURNAL = gql`
  mutation addJournal($post: String!) {
    createPost(post: $post) {
      userId
    }
  }
`;

// export const UPDATE_JOURNAL = gql`
//   mutation createJournal($journal_id: String!, user: $User, calendar: $Calendar, gymPlan: $GymPlan, foodPlan: $foodPlan)) {
//     createPost($journal_id: String!, user: $User, calendar: $Calendar, gymPlan: $GymPlan, foodPlan: $foodPlan) {
//       userId
//     }
//   }
// `;

export const ADD_CALENDAR_EVENT = gql`
  mutation addCalendarEvent($calendarID: String!, $event: String!) {
    addCalendarEvent(calendarID: $calendarID, event: $event) {
      calendarID
      events
    }
  }
`;

export const REMOVE_CALENDAR_EVENT = gql`
  mutation removeCalendarEvent($calendarID: String!, $event: String!) {
    removeCalendarEvent(calendarID: $calendarID, event: $event) {
      calendarID
      events
    }
  }
`;

export const ADD_GYM_PLAN = gql`
  mutation addGymPlan($gymPlanID: String!, $exercise: String!) {
    addGymPlan(gymPlanID: $gymPlanID, exercise: $exercise) {
      gymPlanID
      exercise
    }
  }
`;

export const REMOVE_GYM_PLAN = gql`
  mutation removeGymPlan($gymPlanID: String!, $exercise: String!) {
    removeGymPlan(gymPlanID: $gymPlanID, exercise: $exercise) {
      gymPlanID
      exercise
    }
  }
`;

export const ADD_FOOD_PLAN = gql`
  mutation addFoodPlan($foodPlanID: String!, $name: String!) {
    addFoodPlan(foodPlanID: $foodPlanID, name: $name) {
      foodPlanID
      name
    }
  }
`;

export const REMOVE_FOOD_PLAN = gql`
  mutation removeFoodPlan($foodPlanID: String!, $name: String!) {
    removeFoodPlan(foodPlanID: $foodPlanID, name: $name) {
      foodPlanID
      name
    }
  }
`;

