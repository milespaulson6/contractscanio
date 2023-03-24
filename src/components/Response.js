import React from "react";

function Response(apiResponse) {
    const spartanG = Array.from(apiResponse);
    console.log("apiResults array: ", spartanG);
    return (
        <li>
            {spartanG[0]} 
            
        </li>
    );
}

export default Response;