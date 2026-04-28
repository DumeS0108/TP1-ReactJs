import React from 'react';

function ComposantMapping() {
    const listeUtilisateurs = ["tata", "titi", "toto", "lala", "lili","lolo"];

    return (
        <div>
            <h2>Consigne 2 : Mapping (boucle map)</h2>
            <ul>
                {listeUtilisateurs.map((utilisateur, index) => (
                    <li key={index}>{utilisateur}</li>
                ))}
            </ul>
        </div>
    );
}

export default ComposantMapping;