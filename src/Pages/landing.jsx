import React, {useEffect,useState} from "react";
import Nav from "../Components/nav";
import {db} from "../firebase";
import './landing.css';
// import productos from "../Components/snapshot";
function Main(){
    let [products,setProducts]=useState([]);
    useEffect(()=>{
        const unsuscribe=db.collection('products').onSnapshot((snapshot)=>{
                console.log(snapshot.docs);
                // setProducts(snapshot.docs.map(d=>({...d.data()})));
                setProducts(snapshot.docs.map(d=>d.data()));
        });
    },[]);
    return(
        <>
        <Nav/>
        <h1 style={{textAlign:'center'}}>Productos</h1>
        <main>
            {   
                products.map((data,index)=>{
                    console.log(data.quantity)
                    if(data.quantity>0){
                        return(
                            <article key={index} className='card'>
                                <p className='name'>{data.name}</p>
                                <div>
                                    <img src={data.image} alt=""/>
                                </div>
                                <div>
                                    
                                </div>
                            </article>
                        )
                    }else{
                        return null;
                    }
                })
            }
        </main>
        </>
    )
}

export default Main; 