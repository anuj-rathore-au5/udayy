import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./pages/login";
import Navbar from "./components/navbar";
import MainPage from "./pages/mainPage";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/login" component={LoginPage} exact />
        <Route path="/" component={LoginPage}  exact/>
        <Route path="/mainPage" component={MainPage}  exact/>
      </Switch>

      
    </div>
  );
}

export default App;
