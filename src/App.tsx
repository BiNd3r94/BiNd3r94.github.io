import React from 'react';
import './App.css';
import {PrimeReactProvider} from "primereact/api";
import {Header} from './components/Header';
import "primeflex/primeflex.css";
import "primereact/resources/themes/lara-light-teal/theme.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {routesFooterNavigation, routesMainNavigation} from "./assets/routesMainNavigation";
import {Footer} from "./components/Footer";

const getRoutes = () => {
  return (
      <div className={"main-content"}>
        <Routes>
          {routesMainNavigation.map((route, index) => {
            return <Route key={"main-route-" + index} path={route.path}
                          element={route.component}></Route>
          })}
          {routesFooterNavigation.map((route, index) => {
            return <Route key={"footer-route" + index} path={route.path}
                          element={route.component}></Route>
          })}
        </Routes>
      </div>
  )
}

function App() {
  return (
      <PrimeReactProvider>
        <Router>
          <div className="page-container">
            <Header/>
            {getRoutes()}
            <Footer/>
          </div>
        </Router>

      </PrimeReactProvider>

  );
}

export default App;
