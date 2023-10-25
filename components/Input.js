import React, { useState } from "react";

function Input(props) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div style={{ margin: "20px" }}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button
        onClick={() => {
          props.onAdd(inputValue);
          setInputValue("");
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default Input;
