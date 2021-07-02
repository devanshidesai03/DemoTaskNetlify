
import { BrowserRouter,Route,Switch } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Projects from "./Pages/Projects";
import background from "./Images/image1.jpg";

const App = ()  => {
  return (
  
    <BrowserRouter>
       <Switch>
       <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="*">
          <Error />
        </Route>
       </Switch>
    </BrowserRouter>
  
    
  );
}

export default App;