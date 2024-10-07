import React from "react";
import Button from "./Button";
export default function ButtonList({numbers,onButtonClick})
  {
   return (
   <div className="button-list">
    {numbers.map((number,i)=>(
      <Button
      key={i}
      number={number}
      onClick={()=>onButtonClick(number)}
      />
    ))}
   </div>
   );
  }