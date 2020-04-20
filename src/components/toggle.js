import React from "react";

const Toggle = props => {
  return (
    <button
      style={{
        border: "none",
        background: "none",
      }}
      onClick={props.onClick}
    >
      🎉
    </button>
  );
};

export default Toggle;
