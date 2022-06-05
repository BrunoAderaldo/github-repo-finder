import { gql } from "@apollo/client";

const searchRepositories = gql`
  query ($search_term: String!) {
    search(query: $search_term, type: REPOSITORY, first: 10) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            id
            name
            owner {
              login
            }
            stargazers {
              totalCount
            }
            primaryLanguage {
              id
              color
              name
            }
            description
          }
        }
      }
    }
  }
`;
export default searchRepositories;
