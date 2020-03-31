
import React from "react";
<<<<<<< HEAD
import Game from "./game.jsx";
import {shallow, mount} from "enzyme";

// Tests the rendering of Components
=======
import Game from "./Game";
import {shallow, mount} from "enzyme";
import { select } from 'qa-utilities';

// Tests the rendering of Components
    
>>>>>>> eb3f3535bc4f68617accc8af116f2d832947220c
it("<Game/> renders without error", () => {
    shallow(<Game/> )
});

<<<<<<< HEAD
=======


>>>>>>> eb3f3535bc4f68617accc8af116f2d832947220c
// Game status test for which player is next
it("<Game/> status is correct", () => {
    const wrapper = mount(<Game/>);
    const firstPlayer = wrapper.find("div.gameInfo").children().first().text();
    expect(firstPlayer).toEqual("Next player is X");
  
    // Checks if onClick changes player status
    const button = wrapper.find("button.square").first().simulate("click");
    const secondPlayer = wrapper.find("div.gameInfo").children().first().text();
    expect(secondPlayer).toEqual("Next player is O");
  
    //Simulates a game of Tic-Tac-Toe
    const move2 = wrapper.find("button.square").at(1);
    move2.simulate("click");
    const move3 = wrapper.find("button.square").at(4);
    move3.simulate("click");
    const move4 = wrapper.find("button.square").at(5);
    move4.simulate("click");
    const move5 = wrapper.find("button.square").at(8);
    move5.simulate("click");
  
    // Expect the winner
    const winner = wrapper.find("div.gameInfo").children().first().text();
    expect(winner).toEqual("X is the Winner!");
  })