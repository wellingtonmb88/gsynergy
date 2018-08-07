import React from "react";
import ItemCard from "../../components/ItemCard";
import { shallow } from "enzyme";

const props = {
  item: {
    id: "1",
    text: "name1",
    image_url: "https://unsplash.it/1000/1000"
  }
};

describe("render the component ItemCard", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  it("renders with item", () => {
    const tree = shallow(<ItemCard {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
