import { gql } from "@apollo/client";
//getting a single user
export const GET_USER = gql`
  {
    query User{
    User{
      _id
      username
      email
    }
  }
`;


export const GET_JOURNAL = gql`
  {
    query journal{
    journal{
      _id
      Calendar
      GymPlan
      FoodPlan
      BMI
      HeartRate
    }
  }
`;





// export const QUERY_SINGLE_USER = gql`
//   Query singleuser{
//      User{
//       _id
//       username
//       email
//       gymPlan
//       foodPlan
//       BMI
//     }
//   }
// `;
