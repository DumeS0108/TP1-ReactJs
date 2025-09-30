import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [isConnected, setIsConnected] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault(); // empêche le rechargement de la page
    setIsConnected(true); // change l'état pour afficher "Connecté"
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Formulaire de connexion simple exercice au React :</p>

        {isConnected ? (
          <h2>✅ Connecté</h2>
        ) : (
          <form onSubmit={handleLogin}>
            <input type="text" placeholder="Nom d'utilisateur" /><br />
            <input type="password" placeholder="Mot de passe" /><br />
            <button type="submit">Se connecter</button>
          </form>
        )}
      </header>
    </div>
  );
}

export default App;
