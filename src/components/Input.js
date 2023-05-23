import React, { useState } from "react";

function Input({ attributes, onChange  }) {

    const [value, setValue] = useState("");

    const handleChange = (event) => {
      const inputValue = event.target.value;
      setValue(inputValue);
      onChange(inputValue);
    };
  return (
    <>
      <label htmlFor={attributes.name}>
        {attributes.label}
        <input
          type={attributes.type}
          placeholder={attributes.placeholder}
          name={attributes.name}
          onChange={handleChange}
          value={value}
        />
      </label>
    </>
  );
}

export default Input;
