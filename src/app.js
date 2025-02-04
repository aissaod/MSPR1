// src/App.js
import React from 'react';
import './App.css'; // Si tu veux un fichier CSS spécifique pour le composant

function App() {
  return (
    <div>
      <header>
        <h1>Bienvenue sur le site de MSPR</h1>
      </header>

      <main>
        <section>
          <h2>Bienvenue sur notre plateforme !</h2>
          <p>C'est ici que tu peux gérer tes tickets et suivre les demandes de l'entreprise.</p>
        </section>
        
        <section>
          <h3>Fonctionnalités</h3>
          <ul>
            <li>Gestion des tickets</li>
            <li>Suivi des demandes</li>
            <li>Notifications en temps réel</li>
          </ul>
        </section>

        <section>
          <p><a href="/login">Se connecter</a></p> {/* Lien vers la page de connexion */}
        </section>
      </main>

      <footer>
        <p>&copy; 2025 MSPR - Tous droits réservés</p>
      </footer>
    </div>
  );
}

export default App;
