import React,{Component} from 'react';
import BiceLabel from '../../src/componentes/biceLabel';

class BiceValores extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render() {
      return (
        <div>

            <div>
              <div className="row">
                <div className="col-sm-4" >
                  <BiceLabel valor="UF=" nombre="1.3456"/>
                </div>
                <div className="col-sm-4" >
                  <BiceLabel valor="UF=" nombre="1.3456"/>
                </div>
                <div className="col-sm-4" >
                  <BiceLabel valor="UF=" nombre="1.3456"/>
                </div>
              </div>
            </div>

            <div>
              <div className="row">
                <div className="col-sm-4" >
                  <BiceLabel valor="UF=" nombre="1.3456"/>
                </div>
                <div className="col-sm-4" >
                  <BiceLabel valor="UF=" nombre="1.3456"/>
                </div>
                <div className="col-sm-4" >
                  <BiceLabel valor="UF=" nombre="1.3456"/>
                </div>
              </div>
            </div>

            <div>
              <div className="row">
                <div className="col-sm-4" >
                  <BiceLabel valor="UF=" nombre="1.3456"/>
                </div>
                <div className="col-sm-4" >
                  <BiceLabel valor="UF=" nombre="1.3456"/>
                </div>
                <div className="col-sm-4" >
                  <BiceLabel valor="UF=" nombre="1.3456"/>
                </div>
              </div>
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
export default BiceValores;