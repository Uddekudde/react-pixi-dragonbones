import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import TopBar from "../TopBar";

afterEach(cleanup);
it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<TopBar/>, div);
});

it("renders button correctly", () => {
    const { getByText } = render(<TopBar />);
    expect(getByText('About')).toBeInTheDocument();
});

it("matches snapshot", () => {
    const tree = renderer.create(<TopBar />).toJSON();
    expect(tree).toMatchSnapshot();
});

