import React from "react";
import "./loading.css";
function Loading() {
  return (
    <main id="main">
      <div className="center">
        <div className="loading--spinner">
          <span>loading..</span>
        </div>
      </div>
    </main>
  );
}

export default Loading;
