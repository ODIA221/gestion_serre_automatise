import React/* , { Component, useState }  */from "react";
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import "./Style2.css";
import axios from "axios";

/* endPoint api */
const ENDPOINT = "http://localhost:5000/api/connexion"
/* 
const baseURL = "http:localhost:2000/api/connexion"; */

const LoginForm = () => {

    const navigate = useNavigate();


  

    /*  */
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm(
        {mode:"onChange"}
      );

  
      
      /*  */
      const onSubmit = (data) => console.log(data);

/* pour se connecter */
const connexion = (/* e */) =>{
    /* e.preventDefault(); */

    const data = {
        email: document.getElementById("email").value, 
        password: document.getElementById("password").value 
    }
    try{
        axios
        .post(ENDPOINT, data)
        .then(function(response){
            /* vérification token */
            if(response?.data?.token){
                /* stockage du token dans localStorage */
                localStorage.setItem('token', response?.data?.token)
                /* redirection si token est bon */
                window.location.pathname = 'Dashboard/TableauDB';
            } 
          
          
            
            
        })
        .catch(function(error){
            console.log("check error  ==>", error)

        })
        .then(function(){
            console.log("c'est bon")
        });
    }catch(err){
        alert(err); //failed to match
    }
} 


      /* pour se connecter */
   /*    const [email, setEmail] = useState("");
      const [password, setPass] = useState("");  */

/*       function connexion(e) {
        e.preventDefault();
        let request = {
            email: document.getElementById("email").value, 
            password: document.getElementById("password").value 
        }
        axios.post('http://localhost:2000/api/connexion', request)
        .then(resp => {
            alert(resp.data.message);
        } )
        .catch(err =>{
            console.log(err)
        })

        axios.post('/http://localhost:2000/api/connexion', {
            email: document.getElementById("email").value, 
            password: document.getElementById("password").value 
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        

    }  */
/*  */
    return (
        <div className="body">
            {/* div rfid  connexion*/}
            <div  className="corp">
                {/* <h1 className="labelRfid" > RFID</h1> */}

            </div>
            {/* div form connexion*/}
                <form className="corp1" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="label" >Connexion</h1>

                    <div>
                        <div className="label">
                            <label>
                                Email
                            </label>
                        </div>
                        <div>
                        <input 
                            id="email"
                            className="input"
                            type="text" 
                            placeholder="Email" 
                            {...register("email", {
                                required: "Champ Obligatoire",
                                pattern:{
                                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                                    message: "Format du mail incorrect",
                                } 
                            })}
                         /> 
                         {/* Message d'erreurs */}
                         {errors.email && <small className='err'>{errors.email.message }</small>}
                         </div>
                    </div>

                    <div>
                        <div className="label">
                            <label>
                                Mot de passe
                            </label>
                        </div>
                        <div>
                            <input 
                                id="password"
                                className="input"
                                type="password" 
                                placeholder="Mot de passe" 
                                {...register("password", {
                                    required: "Champ Obligatoire",
                                    
                                    minLength: {
                                    value: 5,
                                    message: "5 Caractètes au minimum"
                                    },
                                    maxLength: {
                                    value:10,
                                    message: "10 Caractètes au maximum"
                                    }
                                })}
                            />
                            {/* Message d'erreurs */}
                            {errors.password && <small className='err'>{errors.password.message }</small>}
                        </div>
                    
                    </div>

                    <button type="submit" className="login-btn" onClick={(e) =>connexion(e)}>Connexion</button>
                
                </form>

        </div>      
        

    )
};



export default LoginForm
