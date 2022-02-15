import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        gymPlan
        foodPlan
        BMI
      }
    }
  }
`;

export const CREATE_JOURNAL = gql`
  mutation createJournal($post: String!) {
    createPost(post: $post) {
      userId
    }
  }
`;



export const UPDATE_JOURNAL = gql`
  mutation createJournal($journal_id: String!, user: $User, calendar: $Calendar, gymPlan: $GymPlan, foodPlan: $foodPlan)) {
    createPost($journal_id: String!, user: $User, calendar: $Calendar, gymPlan: $GymPlan, foodPlan: $foodPlan) {
      userId
    }
  }
`;
