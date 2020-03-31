import React from "react";
<<<<<<< HEAD
import Square from "./square.jsx";
=======
import Square from "./Square";
>>>>>>> eb3f3535bc4f68617accc8af116f2d832947220c
import {shallow} from "enzyme";

// Tests the rendering of Components
it("<Square/> renders without error", () => {
    shallow(<Square/> )
});