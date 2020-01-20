import React from "react";

const SpecialButton = (props) => {
  return (
    <div>
      <button>{props.specials}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </div>
  );
};

export default SpecialButton;