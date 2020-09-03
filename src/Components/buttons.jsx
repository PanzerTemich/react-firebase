import React, {useState} from 'react';

function Adder({product}){
    let [quantity,setQuantity]=useState(0);
    function decrese(){
        if(quantity>0){
            setQuantity(quantity-1);
        }
    }
    function increse(){
        if(quantity<product.quantity){
            setQuantity(quantity+1);
        }
    }
    console.log(product);
    return(
        <div>
        <p>Disponible: {product.quantity}</p>
        <p>Agregado {quantity}</p>
        <div className='buttons'>
        <button onClick={decrese}>Quitar</button>
        <button onClick={increse}>Agregar</button>
        </div>
    </div>
    )
}
export default Adder;