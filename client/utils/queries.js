import { gql } from "@apollo/client";
//getting a single user
export const GET_USER = gql`
  {
    query user{
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
      



