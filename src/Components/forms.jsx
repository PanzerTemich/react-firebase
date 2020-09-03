import React, {useState} from 'react';
function Form(){
    let css={display:'flex',position:"absolute",height:'100vh',width:'100%',
    backgroundColor:'black',opacity:'.98',top:0,color:'white',justifyContent:'center',
    alignItems:'center',flexDirection:'column'
    }
let [formName,setFormName]=useState('');
let [mail,setMail]=useState('');
let [password,setPassword]=useState('');
d.addEventListener('click',(e)=>{
    if(e.target.matches('.background')){
        setForm(0);
    }
})
function registration(e){
    e.preventDefault();
    alert(`${formName} and ${mail} and ${password}`);
}
function enter(e){
    e.preventDefault();
    alert(`${mail} and ${password}`);
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
export default Form;