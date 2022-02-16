import { gql } from "@apollo/client";

export const ADD_USER = gql`
mutation register($username: String!, $email: String!, $password: String!) {
    register(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        password
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



export const UPDATE_JOURNAL = gql`
  mutation createJournal($journal_id: String!, user: $User, calendar: $Calendar, gymPlan: $GymPlan, foodPlan: $foodPlan)) {
    createPost($journal_id: String!, user: $User, calendar: $Calendar, gymPlan: $GymPlan, foodPlan: $foodPlan) {
      userId
    }
  }
`;
