import React from "react";

import Calculator from "./components/Calculator";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <Calculator />
      <GlobalStyles />
      <div>
        <h1>Alteração</h1>
      </div>
    </>
  );
}

export default App;
