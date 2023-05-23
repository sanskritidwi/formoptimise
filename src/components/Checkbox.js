import React, { useState } from 'react';

const Checkbox = ({ attributes, checked, onChange }) => {
  const handleChange = () => {
    onChange(!checked);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        {attributes.label}
      </label>
    </div>
  );
};

export default Checkbox;
