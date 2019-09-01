import React, { Component, Fragment } from 'react';
import Producto from './Producto';

class Productos extends Component {
    state = {
        productos : [
            { 
                id : 1, 
                name : 'Camisa React', 
                precio : 30 
            },
            { 
                id : 2, 
                name : 'Camisa VueJS', 
                precio : 30 
            },
            { 
                id : 3, 
                name : 'Camisa Angular', 
                precio : 30 
            },
            { 
                id : 4, 
                name : 'Camisa Node.JS', 
                precio : 30 
            }
        ],
        totalCarrito : 500,
        cliente : 'Ivan Aburto'
    }

    componentDidMount() {
        console.log(1);
    }
    componentWillMount() {
        console.log(2);
    }
    componentWillUpdate() {
        console.log(3);
    }
    componentWillUnmount() {
        console.log(4);        
    }

    render() { 
        console.log(5);
        
        const { productos }= this.state;
        

        return ( 
            <Fragment>
                <h1>Lista de Productos</h1>
                { productos.map( producto => (
                    <Producto 
                        key = { producto.id }
                        producto = { producto }
                    />
                ) ) }
            </Fragment>
         );
    }
}
 
export default Productos;