import './App.css';
import ComposantTernaire from './composant/ComposantTernaire';
import ComposantMapping from './composant/ComposantMapping';

function App() {
    return (
        <div className="App">
            <h1>Exo 30 react</h1>
            <hr />
            
            <hr />

            {/* Affichage de l'exercice 30 (Consigne 1) */}
            <ComposantTernaire />
            
            <hr />

            {/* Affichage de l'exercice 30 (Consigne 2) */}
            <ComposantMapping />
            
        </div>
    );
}

export default App;