import React,{useState} from 'react'
import './style.css'

import {GoogleOutlined,FacebookOutlined,AppleOutlined} from '@ant-design/icons';
function Login(props){
    const[formData,setFormData]=useState({
        email:'',
        password:'',
        ischecked:false
    })
    const [erros,setErrors]=useState({})

    const handleSubmit = (event) => {
        event.preventDefault();
        const newErrors=formValidation(formData)
        console.log(newErrors)
        setErrors(newErrors)
        if(formData.email&&formData.password){
            console.log("no err")

            props.gohome()

        }
      }

      const valueChang=(e)=>{
        console.log(e)
        setFormData(prev=>({...prev,[e.target.name]:e.target.value}))
      }

      const formValidation=(data)=>{
       const errors={}
       if(!data.email) errors.email="email is required"
       if(!data.password) errors.password="password is required"
         return errors
      }


    return(
        <div className='login'>
            <form className='login-card' onSubmit={handleSubmit}>
                <div className='login-logo'>
                <h1>MAA.<span>LY</span></h1>
                </div>
                <h3 className='card-titel'>Login</h3>
                    <input className={erros.email ?'custom-input-error':'custom-input'} placeholder='Email' type="text" name="email" value={formData.email} onChange={valueChang}>
                    </input>
                    {erros.email && <p className='formerror'>{erros.email}</p>}
                    <input className={erros.password ?'custom-input-error':'custom-input'} placeholder='Password' type="password" name="password" value={formData.password} onChange={valueChang}/>
                    {erros.password && <p className='formerror'>{erros.password}</p>}
                   <div className='Remamber'>
                       <input type="checkbox" value={formData.ischecked} onChange={valueChang}/>
                         <span> Remamber Me </span>
                     </div>
                    <button className='custom-button'  type="submit">LOGIN</button>
                    <p className='forgetpassword'>Forgot Password?</p>
                    
                    
                    
            </form>
        </div>
    )
}

export default Login;