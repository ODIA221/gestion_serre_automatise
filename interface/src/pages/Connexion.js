import React, {useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import "./Style2.css";

const LoginForm = () => {

    /*  */
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
      /*  */
      const onSubmit = (data) => console.log(data);

   
    return (
        <div className="body">
            {/* div rfid  connexion*/}
            <div  className="corp">
                {/* <h1 className="label" >Connexion avec Carte RFID</h1> */}

            </div>
            {/* div form connexion*/}
                <form className="corp1" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="label" >Connexion Formulaire</h1>

                    <div>
                        <div className="label">
                            <label>
                                Email
                            </label>
                        </div>
                        <input 
                            className="input"
                            type="text" 
                            placeholder="Email" 
                            {...register("email", {
                                required: true,
                                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                            })}
                         /> 
                        <br/><br/>
                         {/* Message d'erreurs */}
                        <small>
                            <error>
                                {errors.email?.type === "required" && "Email obligatoir !"}
                                {errors.email?.type === "pattern" && "Format mail incorrect !"}
                            </error>

                        </small>
                    </div>

                    <div>
                        <div className="label">
                            <label>
                                Mot de passe
                            </label>
                        </div>
                        <input 
                            className="input"
                            type="password" 
                            placeholder="Mot de passe" 
                            {...register("mdp", {
                                required: true,
                                minLength: 5,
                                maxLength: 8,
                            })}
                        /><br/><br/>
                        {/* Message d'erreurs */}
                        <small>
                            <error>
                                {errors.mdp?.type === "required" && "Mot de passe obligatoir !"}
                                {errors.mdp?.type === "minLength" && "5 caractères au minimum !"}
                                {errors.mdp?.type === "maxLength" && "8 caractères au maximun !"}
                            </error>
                        </small>
                    </div>

                    <button type="submit" className="login-btn" /* onClick={} */>Connexion</button>
                
                </form>

        </div>      

    )
}

export default LoginForm