import React, { useContext } from "react";
import { GlobalColor } from "./App";

function SuperChild() {
    //getting data from parent to the child
    const { Hcolor, getDay } = useContext(GlobalColor);

    //sending data from the child to the parent
    const day = "Friday";

    return (
        <div>
            <h3 style={{ color: Hcolor }}>The SuperChild Component.</h3>
            <button onClick={() => getDay(day)}>Click Me</button>
        </div>
    )
}

export default SuperChild;