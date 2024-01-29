import React from "react";

export default function DisplayPlate({ str }) {
  return (
    <div className="plate">
      {str ? <h1>{str.toUpperCase()}</h1>: <h1>ABC123</h1>}
    </div>
  );
}
