import React from 'react';
import { useState, useRef, useEffect } from 'react'

function DynamicForm() {

    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");
  
    // useEffect(() => {
    //   previousInputValue.current = inputValue;
    // }, [inputValue]);
  
    return (
      <>
        <h3>Enter your Value: {inputValue}</h3>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {/* <h2>Previous Value: {previousInputValue.current}</h2> */}
      </>
    );
}

export default DynamicForm