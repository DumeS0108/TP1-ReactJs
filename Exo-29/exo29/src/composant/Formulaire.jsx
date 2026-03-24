import React from 'react';

function Formulaire() {
//consigne 1 : 
    const loginVar = "test";
    const mdpVar = "test";
//consigne 2 :
    const utilisateur = {
        login: "LoginObjet",
        mdp: "MotDePasseObjet"
    };

    return (
        <div>
            
            <h2>Consigne 1 Depuis les variables :</h2>
            <p>Login : {loginVar}</p>
            <p>Mot de passe : {mdpVar}</p>


            <h2>Consigne 2 Depuis l'objet :</h2>
            <p>Login : {utilisateur.login}</p>
            <p>Mot de passe : {utilisateur.mdp}</p>
        </div>
    );
}

export default Formulaire;