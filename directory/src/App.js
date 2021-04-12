import React from "react";
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";

// import "./App.css";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        {/* //header is self contained */}
        <Main />
        {/* //main will hold data */}
      </Wrapper>
      {/* //wrapper holds all components */}
    </div>
  );
}

export default App;