import React, {useEffect, useState} from "react";
import "./Style2.css";

const LoginForm = () => {

   
    return (
        <div className="body">
            {/* div rfid  connexion*/}
            <div  className="corp1">
                <h1 className="label" >Connexion avec Carte RFID</h1>
                <img src="../images/rfid.jpeg" alt="carte"></img>
            </div>
            {/* div form connexion*/}
                <div className="corp">
                    <h1 className="label" >Connexion Formulaire</h1>
                    <label className="label">Email</label>
                    <input type="text" 
                        placeholder="Email" 
                    /> 
                    <label className="label">Mot de pass</label>
                    <input 
                        type="password" 
                        placeholder="Mot de passe" 
                    />

                    <button className="login-btn" /* onClick={} */>Connexion</button>
                
                </div>

        </div>      

    )
}

export default LoginForm