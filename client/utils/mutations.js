import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;
//update workout
export const UPDATE_WORKOUT = gql`
  mutation updateGame($deck: String!, $score: Int!, $matrix: [[Int]]!) {
    updateGame(deck: $deck, score: $score, matrix: $matrix) {
      userId
      deck
      score
      matrix
    }
  }
`;
//update recipe if we are going with recipes
//content will need to be chaged to match models
export const UPDATE_RECIPE = gql`
  mutation updateGame($deck: String!, $score: Int!, $matrix: [[Int]]!) {
    updateGame(deck: $deck, score: $score, matrix: $matrix) {
      userId
      deck
      score
      matrix
    }
  }
`;

export const ADD_WORKOUT = gql`
  mutation addGame($deck: String!) {
    addGame(deck: $deck) {
      _id
      score
      deck
      userId
      deck
      matrix
    }
  }
`;
//update recipe if we are going with recipes
//content will need to be chaged to match models
export const ADD_RECIPE = gql`
  mutation addGame($deck: String!) {
    addGame(deck: $deck) {
      _id
      score
      deck
      userId
      deck
      matrix
    }
  }
`;
