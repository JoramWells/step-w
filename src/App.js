import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import NavBar from "./components/NavBar";
import SearchView from "./components/SearchView";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/search" component={SearchView} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
