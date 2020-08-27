import React, {useState} from 'react';
import {db} from '../firebase';
import './add.css';
function Delete(){
    let [sku,setSku]=useState('');
    let del=(e)=>{
        e.preventDefault();
        // console.log(sku);
        db.collection('products').doc(sku).delete()
        .then(()=>console.log(`Document ${sku} deleted`))
        .catch((err)=>{
            console.error(err);
        });
    }
    return(
        <>
        <div className="container">
            <form>
                <div className="title"><p>Eliminar Producto</p></div>
                <p>SKU:</p>
                <input type="text" value={sku} onChange={(e)=>setSku(e.target.value)}/>
                <div className="container-button">
                    <button onClick={del}>Eliminar</button>
                </div>
            </form>
        </div>
        </>
    )
}
export default Delete;