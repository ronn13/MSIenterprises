import "./App.css";
import NavigationBar from "./component/Navigationbar";
import Footer from "./component/Footer";
import Landing from "./component/Landing";
import About from "./component/About";
import Contact from "./component/Contact";
import Project from "./component/Project";

import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/project" exact component={Project} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
