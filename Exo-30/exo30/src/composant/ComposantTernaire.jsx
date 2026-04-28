import React from 'react';

function ComposantTernaire() {
    const estConnecte = false; 

    return (
        <div>
            <h2>Consigne 1 : Opération Ternaire</h2>
            {estConnecte ? (
                <p style={{ color: 'green' }}>Bonjour, vous êtes bien connecté !</p>
            ) : (
                <p style={{ color: 'red' }}>Erreur : Veuillez vous identifier.</p>
            )}
        </div>
    );
}

export default ComposantTernaire;