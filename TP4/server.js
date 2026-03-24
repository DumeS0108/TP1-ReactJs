  const express = require('express');
  const os = require('os');

  const app = express();
  const port = 3030;

  // Middleware JSON natif
  app.use(express.json());

  // Route POST
  app.post('/', (req, res) => {
    console.log('Données reçues :', req.body);
    res.send('Données reçues et traitées !');
  });

  // Route GET
  app.get('/', (req, res) => {
    res.send('Serveur Express opérationnel 🚀');
  });

  // Démarrage
  app.listen(port, () => {
    const ip = os.networkInterfaces()['ens18']?.[0]?.address || 'localhost';
    console.log(`Serveur en écoute sur ${ip}:${port}`);
  });
