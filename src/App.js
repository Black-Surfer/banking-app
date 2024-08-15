import "./App.css";
import { BrowserRouter as Switch, Route, Router } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import ResetPasswordPage from "./components/ResetPasswordPage";
import TransferPage from "./components/TransferPage";

function App() {
  return (
    // <Router>
    //   <Switch>
    //     <Route exact path="/login" Component={LoginPage} />
    //     <Route exact path="/register" Component={RegisterPage} />
    //   </Switch>
    // </Router>
    <RegisterPage />
  );
}

export default App;
