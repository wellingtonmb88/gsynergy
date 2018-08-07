import React from "react";
import App from "../App";
import { shallow } from "enzyme";

describe("Test App rendering", () => {
  it("renders App without crashing", () => {
    jest.useFakeTimers();
    const tree = shallow(<App />);
    expect(tree).toMatchSnapshot();
  });
});
