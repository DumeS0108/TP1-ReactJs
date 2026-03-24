const express = require("express");
const os = require("os");
const bodyParser = require("body-parser");
const app = express();
const port = 3030;

app.use(express.json());
// Middleware JSON natif
app.use(bodyParser.urlencoded({ extended: true }));

// Route GET
app.get('/', (req, res) => {
  const donneeGet = req.query.login;
  if (donneeGet) {
    console.log("Donnée reçue via GET :", donneeGet);
  }
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Formulaire Simple GET</title>
    </head>
    <body>
        <form action="" method="GET">
            <label for="login">Login :</label>
            <input type="text" id="login" name="login">
            <button type="submit">Envoyer</button>
        </form>
    </body>
    </html>
  `);
});

// Route POST
app.post("/", (req, res) => {
  const donneesDuCorps = req.body.login;
  console.log(donneesDuCorps);
  res.send("Données reçues et traitées !");
});

// Démarrage du serveur

const server = app.listen(port, () => {
  const ip = os.networkInterfaces()["ens18"]?.[0]?.address || "localhost";
  console.log(`Serveur en écoute sur ${ip}:${port}`);
});
