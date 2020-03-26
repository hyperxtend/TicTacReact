
import React from "react";
import Square from "./Components/Square";
import Board from "./Components/Board";
import Game from "./Components/Game";
import {shallow, mount} from "enzyme";

// Tests the rendering of Components
it("renders without error", () => {
    let squares = Array(9).fill(null);
    shallow(<Square/>, <Game/>, <Board squares={squares}/> )
});

// Tests onClick event of buttons
it("onClick event works on buttons", () => {
  let squares = Array(9).fill(null);
  const onClick = jest.fn();
  let wrapper = mount(<Board squares={squares} onClick={onClick}/>);
  wrapper.find("button.square").first().simulate("click");
  expect(onClick).toBeCalledWith(0);
});

// Game status test for which player is next
it("game status is correct", () => {
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

