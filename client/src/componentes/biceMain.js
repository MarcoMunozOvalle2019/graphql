import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import Combo1 from "./combo1"
import Combo2 from "./combo2"


let GET_USER_INFO = gql`
    {
        tasks {
            _id
            BirthDay
            }
    }
`;

class GettingGraphQLData extends Component {


    combo(){
        var data = this.props.data;
        if(data.loading){
            return( <option disabled>Loading authors</option> );
        } else {
            const a = data.tasks.map(author => {
                return( <option key={ author._id } value={author.BirthDay}>{author.BirthDay}</option> );
            });
            return a
        }
    }
    handleDropdownChange(e) {
        console.log(e.target.value)
       // this.setState({ selectValue: e.target.value });
      }
    
    render(){
        return(
        <div>

                    <label>Option1.</label>
                    <select onChange={this.handleDropdownChange}>
                        <option>BirthDay</option>
                        { this.combo() }
                    </select>
                    <Combo1/>
                    <Combo2/>

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
                 <div className="col-sm-6">
                     <div className="card">
                     <div className="card-body">
                         <h5 className="card-title">Indicadores</h5>
                         <p className="card-text">Indicadores  bussyness</p>
                         <form action="/indicadores/1" method="get" >
                             <button className="btn btn-primary"type="submit">Ir a indicadores</button>
                         </form>
                     </div>
                     </div>
                 </div>


                 <div className="col-sm-6">
                     <div className="card">
                     <div className="card-body">
                         <h5 className="card-title">Graficas</h5>
                         <p className="card-text">Graficas de indicador Dolar</p>
                         <form action="/graficas/1" method="get" >
                             <button className="btn btn-primary"type="submit">Ir a graficas</button>
                         </form>
                     </div>
                     </div>
                 </div>
                 <div className="col-sm-6">
                     <div className="card">
                     <div className="card-body">
                         <h5 className="card-title">Valores</h5>
                         <p className="card-text">Mostrar Valores del dia</p>
                         <form action="/valores/1" method="get" >
                             <button className="btn btn-primary"type="submit">Ir a valores</button>
                         </form>
                     </div>
                     </div>
                 </div>
                 <div className="col-sm-6">
                     <div className="card">
                     <div className="card-body">
                         <h5 className="card-title">Bajo Construccion1</h5>
                         <p className="card-text">En Construccion1</p>
                         <form action="/pagina5/1" method="get" >
                             <button className="btn btn-primary"type="submit">Ir a construccion</button>
                         </form>
                     </div>
                     </div>
                 </div>

             </div>

             <img src={require('../assets/1.gif')} alt="loading..." width="180" height="180" />

             <div className="card text-white bg-primary mb-3" >
             <div className="card-body">
                 <button className="btn btn-primary"type="submit">Bienvenidos</button>
             </div>
             </div>

            
        </div>


        );
    }
}


export default graphql(GET_USER_INFO)(GettingGraphQLData)

