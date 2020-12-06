import React, { Component } from 'react';
import Indicadores from './componentes/biceIndicadores';
import Graficas from './componentes/biceGraficas';
import BiceMain from './componentes/biceMain';
import Valores from './componentes/biceValores';
import {Route} from 'react-router-dom';

class App extends Component {

  constructor(props){
      super(props);
      this.state = { 
      };
   }
   
   render() {
    const texto = 'Global Logic';
    return (
      <div className="App">
         <h1>{texto}</h1>
         <Route exact path='/' component={BiceMain }/>
         <Route exact path='/valores/:id' component={ ()=><Valores /> }/>
         <Route exact path='/indicadores/:id' component={ ()=><Indicadores/> }/>
         <Route exact path='/graficas/:id' component={ ()=><Graficas /> }/>
      </div>
    )
  }
}

export default App;
