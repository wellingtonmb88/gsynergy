import React from "react";
import { shallow } from "enzyme";
import If from "../../components/If";

describe("render the ProductListScreen", () => {
  it("renders without crashing", () => {
    const tree = shallow(<If />);
    expect(tree).toMatchSnapshot();
  });

  it("testing the rest of the conditional", () => {
    const tree = shallow(
      <If test={true}>
        <span>Test</span>
      </If>
    );
    expect(tree).toMatchSnapshot();
  });
});
