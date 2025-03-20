import React, { JSX } from "react";
import { TopPage } from "./App";

const Heading:React.FC<TopPage> = ({firstLine, phoneNumber}:TopPage):JSX.Element => {
    return (
        <div>
            <h1>{firstLine}</h1>
            <h2>{phoneNumber}</h2>
        </div>
    );
};

export default Heading;