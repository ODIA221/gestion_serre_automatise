import React, {useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import "./Style2.css";
import Axios from "axios";



/* 
const baseURL = "http:localhost:2000/api/connexion"; */

const LoginForm = () => {

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



      /*  */


      function connexion(e) {
        e.preventDefault();
/*         let request = {
            email: document.getElementById("email").value, 
            password: document.getElementById("mdp").value 
        }
        Axios.post('http:localhost:2000/api/connexion', request)
        .then(resp => {
            alert(resp.data.message);
        } )
        .catch(err =>{
            console.log(err)
        }) */

        Axios.post('/http:localhost:2000/api/connexion', {
            email: document.getElementById("email").value, 
            password: document.getElementById("password").value 
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        

    }
/*  */
    return (
        <div className="body">
            {/* div rfid  connexion*/}
            <div  className="corp">
                <h1 className="labelRfid" > RFID</h1>

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
                                required: "Champ Obligatoir",
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
                                {...register("mdp", {
                                    required: "Champ Obligatoir",
                                    
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
                            {errors.mdp && <small className='err'>{errors.mdp.message }</small>}
                        </div>
                    
                    </div>

                    <button type="submit" className="login-btn" onClick={(e) =>connexion(e)}>Connexion</button>
                
                </form>

        </div>      
        

    )
};



export default LoginForm
