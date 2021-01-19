import { gql } from "@apollo/client";

export const GET_STAR_GAZERS_COUNT = gql`
  query GetTopics($topicRelated: String!) {
    topic(name: $topicRelated) {
      relatedTopics(first: 10) {
        name
        stargazerCount
        relatedTopics(first: 10) {
          name
        }
      }
    }
  }
`;
