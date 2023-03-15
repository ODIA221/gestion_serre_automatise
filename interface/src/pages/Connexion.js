import React, {useEffect, useState} from "react";
import "./Style2.css";

const LoginForm = () => {

   
    return (
        <div className="body">
            <div  className="corp">

            </div>
            <div className="corp">
                <h1 >Connectez-vous</h1>
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Mot de passe" />

                <div className="login-btn" /* onClick={} */>Connexion</div>

            </div>

        </div>
        
        

    )
}

export default LoginForm