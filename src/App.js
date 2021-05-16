import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomeScreen from './components/HomeScreen';
import NavBar from './components/NavBar';


function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Switch>
        
            
    <Route exact path="/" component={HomeScreen}  />
      </Switch>
    </Router>

    </>
  );
}

export default App;
