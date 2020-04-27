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
      <span role="img" aria-label="toggle dark mode">
        🎉
      </span>
    </button>
  );
};

export default Toggle;
