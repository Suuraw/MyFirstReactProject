  import React, { useState } from "react";
  import { positiveNumbers, negativeNumbers } from "../numbers";
  import ButtonList from "./componets/ButtonList";
  import ResetButton from "./componets/ResetButton";
  import AnswerArea from "./componets/AnswerArea";

  function App() {
    const[count,updateCount]=useState(0);
    const increment_Decrement_Operation=(number)=>
    {
      updateCount(count+number);
    }
    const resetAnswerArea=()=>
    {
      updateCount(0);
    }
  

    return (
      <div className="container">
      <ButtonList
        numbers={positiveNumbers}
        onButtonClick={increment_Decrement_Operation}
      />
      <ButtonList
          numbers={negativeNumbers}
          onButtonClick={increment_Decrement_Operation}
      />
      <AnswerArea
      count={count}
      />
      <ResetButton
      count={count}
      onResetClick={resetAnswerArea}/>
      </div>
    );
  }

  export default App;
