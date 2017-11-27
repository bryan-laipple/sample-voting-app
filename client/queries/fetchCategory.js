import gql from 'graphql-tag';

export default gql`
  query CategoryQuery($id: ID!) {
    category(id: $id) {
      id
      title
      options {
        id
        content
        likes
      }
    }
  }
`;
