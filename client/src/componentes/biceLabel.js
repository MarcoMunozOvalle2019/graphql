
import React,{Component} from 'react';

class BiceLabel extends Component{
    constructor(props){
       super(props);
       const dato=this.props
       this.state={
            valor: dato.valor,
            nombre: dato.nombre
        }
    };  

    render(){
         return(
         <div>
           <div className="card-body">
                <div className="col-sm-16">
                    <div className="card">
                     <div className="card-body">
                        <h5 className="card-title">valores</h5>
                        <p className="card-text">En Construccion</p>
                        <h1>{this.state.valor} {this.state.nombre}</h1>
                        <p className="card-text">___________________________________</p>
                     </div>
                    </div>
                </div>           
            </div>
          </div>            
      )
    }

}
export default BiceLabel;