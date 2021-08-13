import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./containers/HomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <HomePage exact path="/" component={HomePage} />
          <Route> 404 Not Found!</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
