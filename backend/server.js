import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Servir les fichiers statiques depuis 'frontend/public'
app.use(express.static(path.join(__dirname, '../frontend/public')));

// Route pour la page d'accueil
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/public/index.html'));
});

// Route pour la page de connexion
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/public/login.html'));
});

// Route pour gérer la soumission du formulaire de connexion
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log('Nom d\'utilisateur:', username);
    console.log('Mot de passe:', password);

    // Ajouter ici la logique de vérification du login (par exemple, avec une base de données)

    res.send('Connexion réussie'); // Réponse simple après soumission
});

// Démarrer le serveur
app.listen(3002, () => {
    console.log('Server running on port 3002');
});
