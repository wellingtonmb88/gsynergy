import React from "react";
import { shallow, mount } from "enzyme";
import configureMockStore from "redux-mock-store";
import renderer from "react-test-renderer";
import ConnectedProductListScreen from "screens/ProductListScreen";

const mockStore = configureMockStore();

const mockProducts = [
  {
    id: "1",
    name: "product-name1",
    image_url: "https://unsplash.it/1000/1000"
  },
  {
    id: "2",
    name: "product-name2",
    image_url: "https://unsplash.it/1000/1000"
  }
];

const INITIAL_STATE = {
  products: { data: [] },
  loading: false,
  error: false
};

const loading = { ...INITIAL_STATE, loading: true };

const success = {
  products: { data: mockProducts },
  loading: false,
  error: false
};

const failed = { products: { data: null }, loading: false, error: true };

describe("render the ProductListScreen", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  it("renders with products", () => {
    const tree = renderer
      .create(<ConnectedProductListScreen store={mockStore(success)} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders without products", () => {
    const tree = renderer
      .create(<ConnectedProductListScreen store={mockStore(INITIAL_STATE)} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders failed products ", () => {
    const tree = renderer
      .create(<ConnectedProductListScreen store={mockStore(failed)} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders loading products ", () => {
    const tree = renderer
      .create(<ConnectedProductListScreen store={mockStore(loading)} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
