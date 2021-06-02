import AppProvider from "./context/AppContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import MovieDetails from "./components/MovieDetails";
import NavBar from "./components/NavBar";
import SearchMovie from "./components/SearchMovie";
import Footer from "./components/Footer";

function App() {
  return (
    <AppProvider>
      <Router>
        <NavBar logo={"MoviesApp"} />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/movie-details" component={MovieDetails} />
          <Route exact path="/search-movie" component={SearchMovie} />
        </Switch>
        <Footer owner={"2021 GarMaCodes"} />
      </Router>
    </AppProvider>
  );
}

export default App;
