import React from "react";
import Content from "./components/Content";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-screen h-screen bg-[#212025]">
      <Navbar>
        <Content />
      </Navbar>
    </div>
  );
}

export default App;
