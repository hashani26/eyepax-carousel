import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import CarouselContainer from "./Containers/carousel";

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/carousel/:slides" component={CarouselContainer} />
          <Redirect to="/404" component={<h1>404</h1>} />
        </Switch>
      </Router>
  </div>
  );
}

export default App;
