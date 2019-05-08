import React from 'react';

function DropDownList({ list, handleChange }) {
  return (
    <div className="dropDownContainer">
      <select className="dropDownMenu" onChange={handleChange}>
        <option value="" selected disabled hidden>
          Choose a demographic
        </option>
        {list.map(item => {
          return <option value={item}>{item}</option>;
        })}
      </select>
    </div>
  );
}

export default DropDownList;
