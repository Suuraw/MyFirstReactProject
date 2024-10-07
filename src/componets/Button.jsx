import React from "react";
function Button({onClick,number})
{
    return (
    <button onClick={onClick}>{number}</button>
    );
}
export default Button;
