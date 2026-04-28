import React, { useState } from 'react';

function FormulaireConnection() {
    // On crée deux états pour stocker la saisie
    const [login, setLogin] = useState("");
    const [mdp, setMdp] = useState("");

    // La condition de l'exercice : est-ce que le mdp est différent de 1234 ?
    // On vérifie aussi que le champ n'est pas vide pour ne pas que ce soit rouge au démarrage
    const estMauvaisMdp = mdp !== "" && mdp !== "1234";

    // On prépare le style dynamique
    const styleDuComposant = {
        backgroundColor: estMauvaisMdp ? 'red' : 'white',
        color: estMauvaisMdp ? 'white' : 'black',
        padding: '20px',
        border: '1px solid black',
        marginTop: '10px'
    };

    return (
        <div style={styleDuComposant}>
            <h2>Exercice 31 : Formulaire Dynamique</h2>
            
            <div>
                <label>Login : </label>
                <input 
                    type="text" 
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

            {/* Petit message d'aide si c'est rouge */}
            {estMauvaisMdp && <p><strong>Attention : Mot de passe incorrect !</strong></p>}
        </div>
    );
}

export default FormulaireConnection;