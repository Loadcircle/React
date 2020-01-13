import React from 'react';
import "./styles/styles.scss"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import MainC from './index_route'
import Form from './Form'
import Banner from './Banner'


const App = () => (
  <Router>
    <Route  component={ <Banner />}/>
    <Switch>      
      <Route path="/" component={MainC} />
      <Route path="/formulario" component={() => 
        ( 
        <>
          <Form name="alaaa" /> 
        </>
        )} />
      <Route component={ () => (
        <div>
          <h1>404 Pagina no encontrada</h1>
        </div>
      )} />
    </Switch>
  </Router>
  );

export default App;