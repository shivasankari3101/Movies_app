
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from "./components/Home";
import Info from "./components/Info";

function App(){
  return(
    <Router>
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/Info/:id" exact component={Info}></Route> 
    </Switch>
    </Router>      
  )
}

export default App;