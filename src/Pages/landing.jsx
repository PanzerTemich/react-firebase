import React, {useEffect,useState} from "react";
import Nav from "../Components/nav";
import {db} from "../firebase";
import Adder from '../Components/buttons';
import {auth} from '../firebase';
import './landing.css';
// import productos from "../Components/snapshot";
function Main(){
    let [products,setProducts]=useState([]);
    let [aut,setAut]=useState(false);
    useEffect(()=>{
        // const unsuscribe=
        db.collection('products').onSnapshot((snapshot)=>{
                console.log(snapshot.docs);
                // setProducts(snapshot.docs.map(d=>({...d.data()})));
                setProducts(snapshot.docs.map(d=>d.data()));
        });
        auth.onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
              console.log('Ingresado');
              setAut(true);
            } else {
              // No user is signed in.
              console.log('Fuera de sesión');
              setAut(false);
            }
          });
    },[]);
        return(
            <>
            <Nav/>
            {
                aut?(
                    <>
                    <h1 style={{textAlign:'center'}}>Productos</h1>
                    <main>
                        {   
                            products.map((data,index)=>{
                                console.log(data.quantity)
                                if(data.quantity){
                                    return(
                                        <article key={index} className='card'>
                                            <p className='name'>{data.name}</p>
                                            <div>
                                                <img src={data.image} alt=""/>
                                            </div>
                                            <Adder product={data}/>
                                        </article>
                                    )
                                }else{
                                    return null;
                                }
                            })
                        }
                    </main>
                    </>
                ):null
            }
            </>
        )   
}

export default Main; 