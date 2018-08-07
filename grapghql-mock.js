// Welcome to Launchpad!
// Log in to edit and save pads, run queries in GraphiQL on the right.
// Click "Download" above to get a zip with a standalone Node.js server.
// See docs and examples at https://github.com/apollographql/awesome-launchpad

// graphql-tools combines a schema string with resolvers.
import { makeExecutableSchema } from 'graphql-tools';

// Construct a schema, using GraphQL schema language
const typeDefs = `
  type Product {
    id: Int,
    text: String,
    image_url: String
  },
  type Query {
    products: [Product]
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    products: (root, args, context) => {
      return  [
        {
          id: "1",
          text: "product-name1",
          image_url: "https://picsum.photos/1000/1001"
        },
        {
          id: "2",
          text: "product-name2",
          image_url: "https://unsplash.it/1000/1000"
        },
        {
          id: "3",
          text: "product-name3",
          image_url: "https://picsum.photos/1000/1002"
        },
        {
          id: "4",
          text: "product-name4",
          image_url: "https://picsum.photos/1000/1004"
        },
        {
          id: "5",
          text: "product-name5",
          image_url: "https://picsum.photos/1000/1007"
        },
        {
          id: "6",
          text: "product-name6",
          image_url: "https://picsum.photos/1000/1006"
        },
         {
          id: "7",
          text: "product-name7",
          image_url: "https://picsum.photos/1000/1009"
        },
        {
          id: "8",
          text: "product-name8",
          image_url: "https://picsum.photos/1000/1010"
        },
        {
          id: "9",
          text: "product-name9",
          image_url: "https://picsum.photos/1000/1011"
        },
        {
          id: "10",
          text: "product-name10",
          image_url: "https://picsum.photos/1000/1012"
        }
      ];
    },
  },
};

// Required: Export the GraphQL.js schema object as "schema"
export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// Optional: Export a function to get context from the request. It accepts two
// parameters - headers (lowercased http headers) and secrets (secrets defined
// in secrets section). It must return an object (or a promise resolving to it).
export function context(headers, secrets) {
  return {
    headers,
    secrets,
  };
};