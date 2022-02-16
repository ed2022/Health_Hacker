import { gql } from "@apollo/client";
//getting a single user
export const GET_USER = gql`
  {
    query user{
export const QUERY_USER = gql`
  Query allusers{
    User{
      _id
      username
      email
      password
      journal
    }
  }
`;


export const GET_JOURNAL = gql`
  {
    query journal{
      _id
      




export const QUERY_SINGLE_USER = gql`
  Query singleuser{
     User{
      _id
      username
      email
      gymPlan
      foodPlan
      BMI
    }
  }
`;
