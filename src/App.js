import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routers from './routers';
import "slick-carousel/slick/slick.css"; 
import "./scss/_styles.scss";
function App() {
  const showRoutes = (routers) => {
    return routers.map((e, i) => (
         <Route 
          key={i}
          path={e.path}
          exact={e.exact}
          component={e.main}
         />
      ));
    
  }
  return (
    <>
      <Router>
        <Switch>{showRoutes(routers)}</Switch>
      </Router>
    </>
  );
}

export default App;
