import React from "react";
import { useHistory } from "react-router-dom";
const Navigation = () => {
  const history = useHistory();
  return (
    <div className="buttons">
      <button onClick={() => history.push("/appAlpha")}>Go to App Alpha</button>
      <button onClick={() => history.push("/appBeta")}>Go to App Beta</button>
    </div>
  );
};

export default Navigation;
