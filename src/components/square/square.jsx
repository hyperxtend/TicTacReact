import React from "react";
import {Button} from "react-bootstrap";

export default function Square(props) {
  return (
    <Button variant="secondary outline-dark" className="square" onClick={props.onClick}>
      {props.value}
    </Button>
  );
}