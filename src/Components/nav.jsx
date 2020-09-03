import React, {useState,useEffect} from "react";
import './nav.css';
import {auth} from '../firebase';
function Nav(){
    let [aut,setAut]=useState(false);
    let [form,setForm]=useState(0);
    let [navName,setNavName]=useState('');
    let [searcher,setSearcher]=useState(false);
    const d=document;
    let css={display:'flex',position:"absolute",height:'100vh',width:'100%',
        backgroundColor:'black',opacity:'.98',top:0,color:'white',justifyContent:'center',
        alignItems:'center',flexDirection:'column'
    }
    useEffect(()=>{
        // let logged=
        auth.onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
              setNavName(user.displayName);
              console.log('Ingresado');
              setAut(true);
            } else {
              // No user is signed in.
              console.log('Fuera de sesión');
              setAut(false);
            }
          });
        //   if(!logged){
        //       logged.unsuscribe();
        //   }
    },[]);
    function Form(){
        let [formName,setFormName]=useState('');
        let [mail,setMail]=useState('');
        let [password,setPassword]=useState('');
        d.addEventListener('click',(e)=>{
            if(e.target.matches('.background')){
                setForm(0);
            }
        })
        async function registration(e){
            e.preventDefault();
            // alert(`${formName} and ${mail} and ${password}`);
            try{
            await auth.createUserWithEmailAndPassword(mail,password);
            auth.currentUser.updateProfile({
                displayName:formName
            })
            setNavName(formName);
            }catch(err){
                console.log(err);
            }
            setForm(0);
        }
        function enter(e){
            e.preventDefault();
            auth.signInWithEmailAndPassword(mail,password);
            setForm(0);
        }
        if(form===1){
            return(
                <div style={css} className='background'>
                    <h3>Registrarse</h3>
                    <form>
                            <p>Nombre:</p>
                            <input type="text" value={formName} onChange={(e)=>setFormName(e.target.value)}/>
                            <p>Correo:</p>
                            <input type="email" value={mail} onChange={(e)=>setMail(e.target.value)}/>
                            <p>Contraseña:</p>
                            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                            <div style={{display:'flex',justifyContent:'center'}}>
                                <button style={{marginTop:'15px'}} onClick={registration}>Registrarse</button>
                            </div>
                    </form>
                </div>
            )
        }else if(form===2){
            return(
                <div style={css} className='background'>
                    <h3>Ingresar</h3>
                    <form>
                            <p>Correo:</p>
                            <input type="email" value={mail} onChange={(e)=>setMail(e.target.value)}/>
                            <p>Contraseña:</p>
                            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                            <div style={{display:'flex',justifyContent:'center'}}>
                                <button style={{marginTop:'15px'}} onClick={enter}>Ingresar</button>
                            </div>
                    </form>
            </div>
            )
        }else{
            return null;
        }
    }
    function signin(){
        setForm(2);
    }
    function signup(){
        setForm(1);
    }
    function signout(e){
        e.preventDefault();
        auth.signOut();
    }
    d.addEventListener("focusout",(e)=>{
        if(e.target.matches("input[type='search']")){
            d.querySelector(".menu").style.display="block";
            d.querySelector(".name").style.display="block";
            d.querySelector('input[type="search"]').classList.remove('show');
            d.querySelector("input[type='search']").style.display="none";
            // setSearcher(false);
        }
    });
    function showMenu(){
        d.querySelector('.menu-mobile').classList.add('show');
    }
    function hideMenu(){
        d.querySelector('.menu-mobile').classList.remove('show');
    }
    function search(){
            d.querySelector(".menu").style.display="none";
            d.querySelector(".name").style.display="none";
            d.querySelector("input[type='search']").style.display="inline-block";
            d.querySelector("input[type='search']").focus();
            d.querySelector("input[type='search']").classList.add('show');
            // d.querySelector("input[type='search']").blur();
            if(d.querySelector('input[type="search"]').value){
                console.log('Works');
            }
    }
    if(aut){
        return(
            <>
            <header>
                <nav className='nav-desktop'>
                    <div className='left'>
                        <p>{navName}</p>
                    </div>
                    <div className='right'>
                        <button onClick={signout}>Salir</button>
                    </div>
                </nav>
                <nav className="nav-mobile">
                    <button className="menu" onClick={showMenu}>Menú</button>
                    <p className="name">{navName}</p>
                    <input type="search"/>
                    <button onClick={search}>Buscar</button>
                </nav>
                <div className="searcher">
                    <input type="search"/>
                    <button>Buscar</button>
                </div>
            </header>
            <div className="menu-mobile">
                <p>{navName}</p>
                <div className="links">
                    <ol>
                    <li><a href="#">Carrito</a></li>
                        <li><a href="#" onClick={signout}>Salir</a></li>
                    </ol>
                </div>
                <div className="close" onClick={hideMenu}></div>
            </div>
            </>
        )
    }else{
        return(
            <>
            <header className="header-out">
                <nav className='nav-out'>
                    <button onClick={signup}>Registrarse</button>
                    <button onClick={signin}>Entrar</button>
                </nav>
            </header>
            <Form/>
            </>
        )
    }
}
export default Nav;