import React,{ useEffect } from "react";

import Headers from "./components/Headers";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

import $ from "jquery";

function App() {
  return (
    <div>
      <Headers/>
      <Sidebar />
      <Content/>
    </div>
  );
}

export default App;
