import { useState } from "react";
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: #198643;
  height: 20vh;
`;

function Loading() {
    // let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#198643");

    return (
        <div className="sweet-loading">


            <FadeLoader color={color}  css={override} size={150} />
        </div>
    );
}

export default Loading;