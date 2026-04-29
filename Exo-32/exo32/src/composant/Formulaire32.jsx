import React, { useState } from 'react';
import ZoneCouleur from './ZoneCouleur';

function Formulaire32() {
    const [login, setLogin] = useState("");
    const [mdp, setMdp] = useState("");

    const lesDeuxSontRemplis = login.trim() !== "" && mdp.trim() !== "";

    return (
        <div>
            
            <div>
                <label>Login : </label>
                <input 
                    value={login} 
                    onChange={(e) => setLogin(e.target.value)} 
                />
            </div>
            <br />
            <div>
                <label>Mot de passe : </label>
                <input 
                    type="password" 
                    value={mdp} 
                    onChange={(e) => setMdp(e.target.value)} 
                />
            </div>

            <ZoneCouleur estRempli={lesDeuxSontRemplis} />
            
        </div>
    );
}

export default Formulaire32;