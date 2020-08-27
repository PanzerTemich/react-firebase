import React, {useState,useEffect} from 'react';
import './add.css'
import {db} from '../firebase';
function Add(){
    useEffect(()=>{
            db.collection('products').onSnapshot((snapshot)=>snapshot.forEach((e)=>console.log(e.data())));
    },[]);
    let [sku,setSku]=useState('');
    let [name,setName]=useState('');
    let [desc,setDesc]=useState('');
    let [quantity,setQuantity]=useState(null);
    let d=document;
    let add=(e)=>{
        e.preventDefault();
        if(sku&&name&&desc&&(quantity>=0)){
            // console.log(sku);
            // console.log(name);
            // console.log(desc);
            // console.log(quantity);
            db.collection('products').doc(sku).set({
                sku,
                name,
                desc,
                quantity,
                image:"https://as.com/motor/imagenes/2018/03/29/formula_1/1522353401_895547_1522353528_noticia_normal.jpg"
            });
            setSku('');
            setName('');
            setDesc('');
            setQuantity(0);
            let input=d.querySelector('input[type="number"]')
            input.value=0;
            console.log(input.value);
            // let products =
            // db.collection('products').get().then(querySnapshot=>{
            //     querySnapshot.forEach((e)=>{
            //         console.log(e.id);
            //         console.log(e.data());
            //     })
            // })
        }
    }
    // db.collection('products').onSnapshot((snapshot)=>snapshot.forEach((e)=>console.log(e.data())));
    return(
        <>
        <div className="container">
            <form>
                <div className="title"><p>Agregar Producto</p></div>
                <p>SKU:</p>
                <input type="text" value={sku} onChange={(e)=>setSku(e.target.value)}/>
                <p>Nombre:</p>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                <p>Descripción:</p>
                <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} />
                <p>Cantidad</p>
                <input type="number" onChange={(e)=>setQuantity(e.target.value)} min={0} />
                <div className="container-button">
                    <button onClick={add}>Agregar</button>
                </div>
            </form>
        </div>
        </>
    )
}
export default Add;