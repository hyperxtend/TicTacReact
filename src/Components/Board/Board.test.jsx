import React from "react";
import Board from "./Board";
import {shallow, mount} from "enzyme";

// Tests the rendering of Components
it("<Board/> renders without error", () => {
    let squares = Array(9).fill(null);
    shallow(<Board squares={squares}/> )
});

// Tests onClick event of buttons
it("onClick event works on buttons", () => {
    let squares = Array(9).fill(null);
    const onClick = jest.fn();
    let wrapper = mount(<Board squares={squares} onClick={onClick}/>);
    wrapper.find("button.square").first().simulate("click");
    expect(onClick).toBeCalledWith(0);
  });