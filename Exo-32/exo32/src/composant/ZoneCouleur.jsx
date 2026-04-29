import React from 'react';

// On récupère la prop 'estRempli' envoyée par le composant Parent
function ZoneCouleur({ estRempli }) {
    
    // On prépare le style : Vert si c'est rempli, gris clair sinon
    const styleZone = {
        marginTop: '20px',
        padding: '20px',
        textAlign: 'center',
        backgroundColor: estRempli ? 'green' : '#e0e0e0',
        color: estRempli ? 'white' : 'black',
        fontWeight: 'bold',
        borderRadius: '5px',
        transition: 'background-color 0.3s ease'
    };

    return (
        <div style={styleZone}>
            {estRempli ? "Les deux champs sont renseignés !" : "En attente de la saisie..."}
        </div>
    );
}

export default ZoneCouleur;