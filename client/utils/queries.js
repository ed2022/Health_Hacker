import { gql } from "@apollo/client";
//getting a single user
export const QUERY_USER = gql`
  Query allusers{
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
