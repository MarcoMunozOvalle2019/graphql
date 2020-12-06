
import React,{Component } from 'react';
import Client from '../consulta';
import '../../src/App.css'
var _ = require('lodash');


class BiceIndicadores extends Component{
    constructor(props){
       super(props);
        this.state={
            info:[],
            combo:[],
            valores:{}
        }
        this.handleInputChange= this.handleInputChange.bind(this);
    };  
    

    async getData(){
        let respuesta = await Client.search();
        
        const mm=JSON.parse(JSON.stringify(respuesta))
             this.setState({
                 info: mm.data.hits.hits
               });
              const data = mm.data.hits.hits
              let arreglo=[]
              _.map( data, ((item,key)=>{
                  arreglo.push({name:item._source.name})
                  return arreglo;
              }))
              this.setState({combo: arreglo});
      }
    
    componentDidMount(){
       this.getData();
    }     

    handleInputChange(e) {
        e.preventDefault();
        // const {value} = e.target;
        // const data = this.state.info[0].example.response
        // const valores = _.filter(data, { 'key': value });
        // this.setState({valores});
      }

    render(){
        
        let thisOne = {}
        if  (this.state.valores.length > 0 ) thisOne = this.state.valores[0]

        let combo = this.state.combo;
         let optionItems = combo.map((combo,key) =>
                  <option key={key}>{combo.name}</option>
             );

        return(
                <div className="card text-center border-info">
                    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a className="nav-link" href="/">menu1</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/">menu2</a>
                            </li>
                        </ul>
                    </nav>

                    <div className="row">
                        <div className="col-md-6">
                          <div className="card">
                            <div className="card-body">

                                    <select name="priority"
                                            className="form-control"
                                            value={this.state.priority}
                                            onChange={this.handleInputChange}>
                                            {optionItems}
                                    </select>                

                                    <p className="card-text"> </p>

                                    <div className="card" >
                                        <h5 className="card-title">nombre</h5>
                                        <button className="btn btn-primary">{thisOne.name}</button>
                                        <h5 className="card-title">unidad</h5>
                                        <button className="btn btn-primary">{thisOne.unit}</button>
                                        <h5 className="card-title">data</h5>
                                        <button className="btn btn-primary">{thisOne.date}</button>
                                        <h5 className="card-title">valor</h5>
                                        <button className="btn btn-primary">{thisOne.value}</button>
                                    </div>
                                </div>
                            </div>
                        </div>    
                        <img src={require('../assets/2.gif')} alt="loading..." width="360" height="360" />
                    </div>

                <div className="card text-white bg-primary mb-12" >
                    <form action="/" method="get" >
                        <button className="btn btn-primary"type="submit">Volver</button>
                    </form>                
                </div>         
            </div>   
        );
    }

}
export default BiceIndicadores;