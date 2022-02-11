import { Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home/home";
import PokemonDetails from "./pages/pokemonDetails/pokemonDetails";
import "./App.css";
import NavBar from "./components/navBar/navBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route
          exact
          path="/:id"
          render={(props) => <PokemonDetails {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
