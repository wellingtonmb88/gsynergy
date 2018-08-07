import { gql } from "apollo-boost";

export default gql`
  {
    products {
      id
      text
      image_url
    }
  }
`;
