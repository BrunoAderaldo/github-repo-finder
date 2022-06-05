import { gql } from "@apollo/client";

const repositoryDetails = gql`
  query ($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      id
      description
      isArchived
      homepageUrl
      repositoryTopics(first: 10) {
        edges {
          node {
            id
            topic {
              id
              name
            }
          }
        }
      }
      languages(first: 10) {
        edges {
          node {
            id
            color
            name
          }
        }
      }
      stargazerCount
      forkCount
      issues(states: OPEN) {
        totalCount
      }
      watchers {
        totalCount
      }
      openGraphImageUrl
      readme: object(expression: "master:README.md") {
        ... on Blob {
          text
        }
      }
    }
  }
`;

export default repositoryDetails;
