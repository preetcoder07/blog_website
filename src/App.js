import Navbar from './components/Navbar';
import Main from './components/Main';
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");


  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.title = "textUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "textUtils - Light Mode";
    }
  };

  return (
    <>
      <Navbar mode={mode} toggle={toggle} />
      <Router>
        <Switch>
          <Route exact path="/main">
            <Main mode={mode} />
          </Route>
          <Route exact path="/">

          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
