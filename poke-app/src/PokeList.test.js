import React from "react";
import renderer from "react-test-renderer";
import PokeList from "./PokeList.js";

test('renders PokeList.js correctly', () => {
  const tree = renderer
    .create(<PokeList />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});