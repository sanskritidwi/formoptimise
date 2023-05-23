import React, { useState } from 'react'

function Select({attributes, onChange}) {
    const [value, setValue] = useState("");

    const handleChange = (event) => {
      const selectedValue = event.target.value;
      setValue(selectedValue);
      onChange(selectedValue);
    };
  return (
    <div>
    <label>{attributes.label}</label>
    <select required={attributes.required}>
      {attributes.options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
  )
}

export default Select