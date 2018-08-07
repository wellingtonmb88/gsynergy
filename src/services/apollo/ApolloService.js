import ProductQueryTag from "./ProductQueryTag";
import ApolloClient from "apollo-boost";
import fetchPonyfill from "fetch-ponyfill";

const URL_API = "https://10x91rqpm9.lp.gql.zone/graphql";

const client = () => {
  return new ApolloClient({
    uri: URL_API
  });
};

export const service = () => {
  return new Promise((resolve, reject) => {
    client()
      .query({ query: ProductQueryTag })
      .then(result => resolve(result.data.products))
      .catch(e => reject(e));
  });
};
