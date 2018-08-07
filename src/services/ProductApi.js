const mockProducts = [
  {
    id: "1",
    name: "product-mock1",
    image_url: "https://unsplash.it/1000/1000"
  }
];

const apiGetProductList = () => {
  return new Promise((resolve, reject) => {
    resolve(mockProducts);
  });
};

export default apiGetProductList;
