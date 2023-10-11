import SuperChild from "./SuperChild";
import { GlobalColor } from "./App";
import React, { useContext } from "react";

function Child() {
    const { Hcolor } = useContext(GlobalColor);
    const { name } = useContext(GlobalColor);
    return (
        <div>
            <h2 style={{ color: Hcolor }}>The Child Component name is {name}.</h2>
            <SuperChild />
        </div>
    )
}

export default Child;