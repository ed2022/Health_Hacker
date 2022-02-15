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

// export const CREATE_POST = gql`
//   mutation createPost($post: String!) {
//     createPost(post: $post) {
//       userId
//     }
//   }
// `;

// export const DELETE_POST = gql`
//   mutation deletePost($post: String!) {
//     deletePost(dpost: $post) {
//       userId
//     }
//   }
`;
