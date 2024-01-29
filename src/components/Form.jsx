import React from "react";

export default function Form({handleSubmit, plateNumber, handleInputChange, str}) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            value={plateNumber.toLocaleUpperCase()}
            onChange={handleInputChange}
            placeholder="Enter Plate No."
          />
        </label>
        <button type="submit">Enter</button>
      </form>
    </div>
  );
}
