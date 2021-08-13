import "./styles.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AppAlpha from "./components/AppAlpha";
import AppBeta from "./components/AppBeta";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/appAlpha" component={AppAlpha} />
          <Route exact path="/appBeta" component={AppBeta} />
          <Redirect to="/appAlpha" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
