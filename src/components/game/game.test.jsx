import React from "react";
import Game from "./game.jsx";
import {shallow, mount} from "enzyme";

it("<Game/> renders without error", () => {
    shallow(<Game/> )
});

it("<Game/> status is correct", () => {
    const wrapper = mount(<Game/>);
    const firstPlayer = wrapper.find("div.gameInfo").children().first().text();
    expect(firstPlayer).toEqual("Next player is X");
  
    const button = wrapper.find("button.square").first().simulate("click");
    const secondPlayer = wrapper.find("div.gameInfo").children().first().text();
    expect(secondPlayer).toEqual("Next player is O");
  
    const move2 = wrapper.find("button.square").at(1);
    move2.simulate("click");
    const move3 = wrapper.find("button.square").at(4);
    move3.simulate("click");
    const move4 = wrapper.find("button.square").at(5);
    move4.simulate("click");
    const move5 = wrapper.find("button.square").at(8);
    move5.simulate("click");
  
    const winner = wrapper.find("div.gameInfo").children().first().text();
    expect(winner).toEqual("X is the Winner!");
  })
