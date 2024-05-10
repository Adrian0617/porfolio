import React, { useState } from "react";

export const Search = ({ setsearching }) => {
  function handleInputChange(e) {
    setsearching(e.target.value.toLowerCase());
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search product"
        onChange={(e) => handleInputChange(e)}
      />
    </div>
  );
};
