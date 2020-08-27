import React, {useState} from "react";
import './nav.css';
function Nav(){
    let [aut,setAut]=useState(false);
    let [name,setName]=useState("Flavio");
    let [searcher,setSearcher]=useState(false);
    const d=document;
    function signin(){
        setAut(true);
    }
    function signout(){
        setAut(false);
    }
    d.addEventListener("focusout",(e)=>{
        if(e.target.matches("input[type='search']")){
            // console.log('holaaa');
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
        // if(!searcher){
        //     setSearcher(true);
            d.querySelector(".menu").style.display="none";
            d.querySelector(".name").style.display="none";
            d.querySelector("input[type='search']").style.display="inline-block";
            d.querySelector("input[type='search']").focus();
            d.querySelector("input[type='search']").classList.add('show');
            // d.querySelector("input[type='search']").blur();
            if(d.querySelector('input[type="search"]').value){
                console.log('Works');
            }
        // }
    }
    if(aut){
        return(
            <>
            <header>
                <nav className='nav-desktop'>
                    <div className='left'>
                        <p>{name}</p>
                    </div>
                    <div className='right'>
                        <button onClick={signout}>Salir</button>
                    </div>
                </nav>
                <nav className="nav-mobile">
                    <button className="menu" onClick={showMenu}>Menú</button>
                    <p className="name">{name}</p>
                    <input type="search"/>
                    <button onClick={search}>Buscar</button>
                </nav>
                <div className="searcher">
                    <input type="search"/>
                    <button>Buscar</button>
                </div>
            </header>
            <div className="menu-mobile">
                <p>{name}</p>
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
                    <button onClick={signin}>Entrar</button>
                </nav>
            </header>
            </>
        )
    }
}
export default Nav;