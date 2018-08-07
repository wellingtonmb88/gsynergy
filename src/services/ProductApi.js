import * as ApolloService from "./apollo/ApolloService";

const apiGetProductList = () => {
  return new Promise((resolve, reject) => {
    ApolloService.service()
      .then(products => resolve(products))
      .catch(error => reject(error));
  });
};

export default apiGetProductList;