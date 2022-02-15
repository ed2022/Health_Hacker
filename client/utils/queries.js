import { gql } from "@apollo/client";
//getting a single user
export const USER = gql`
  {
    query singleuser{
      _id
      username
      email
      gymPlan
      foodPlan
      BMI
    }
  }
`;


// export const DELETE_POST = gql`
//   {
//     users {
//       _id
//       username
//       email
//   }
// `;

// export const GET_POSTS = gql`
//   {
//     users {
//       _id
//       username
//       email
      
//   }
// `;

