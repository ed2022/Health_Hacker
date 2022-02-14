import { gql } from "@apollo/client";
//getting a single user
export const ME = gql`
  {
    me {
      _id
      username
      email
      workout {
        _id
        score
        recipes {
          _id
        }
      }
    }
  }
`;
//need to verify if we willl be going witj recipies

// export const GET_GYMPLANS = gql`
//   {
//     users {
//       _id
//       username
//       email
//       badges
//       games {
//         _id
//         score
//         decks {
//           _id
//           deckname
//           description
//           cards {
//             cardId
//             front
//             back
//           }
//         }
//       }
//     }
//   }
// `;

export const GET_RECIPIES = gql`
//   {
//     users {
//       _id
//       username
//       email
//       badges
//       games {
//         _id
//         score
//         decks {
//           _id
//           deckname
//           description
//           cards {
//             cardId
//             front
//             back
//           }
//         }
//       }
//     }
//   }
// `;

export const GET_POSTS = gql`
//   {
//     users {
//       _id
//       username
//       email
//       badges
//       games {
//         _id
//         score
//         decks {
//           _id
//           deckname
//           description
//           cards {
//             cardId
//             front
//             back
//           }
//         }
//       }
//     }
//   }
// `;
// export const GET_USER_BY_USERNAME = gql`
//   query user($username: String!) {
//     user(username: $username) {
//       _id
//       username
//       email
//       badges
//       games {
//         _id
//         score
//         decks {
//           _id
//           deckname
//           description
//           cards {
//             cardId
//             front
//             back
//           }
//         }
//       }
//     }
//   }
// `;
