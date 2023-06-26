import React, { useState } from "react";
import "./ToggleStyles.css";

function Toggle() {
  // 1. enabling state: useState(initialize value)
  // 2. initialize state: useState(false)
  // 3. reading state:
  // 4. update state

  const [on, setOn] = useState(false);
  console.log(on);

  return (
    <div>
      <div
        className={`toggle ${on ? "active" : ""}`}
        onClick={() => setOn(!on)}
      >
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
      {/* <div className="toggle-control">
        <div className="toggle-on" onClick={() => setOn(true)}>
          ON
        </div>
        <div className="toggle-off" onClick={() => setOn(false)}>
          OFF
        </div>
      </div> */}
    </div>
  );
}

export default Toggle;
