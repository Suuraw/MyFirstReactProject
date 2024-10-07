import React from "react";
import Button from "./Button";
export default function ResetButton({onResetClick})
{
    return (
     <div className="reset-btn">
        <Button
        key={'reset'}
        number={'reset'}
        onClick={onResetClick}
        />
     </div>
    );
}