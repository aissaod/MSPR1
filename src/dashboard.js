// frontend/src/Dashboard.js
import React, { useState, useEffect } from 'react';

function Dashboard() {
  const [data, setData] = useState([]);
  
  // Récupérer les données du Nester depuis l'API
  useEffect(() => {
    fetch('http://localhost:3001/nester')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
  
  return (
    <div className="container mt-5">
      <h2>Résultats du Harvester</h2>
      <ul className="list-group">
        {data.length > 0 ? (
          data.map((item, index) => (
            <li key={index} className="list-group-item">{item}</li>
          ))
        ) : (
          <li className="list-group-item">Aucune donnée reçue.</li>
        )}
      </ul>
    </div>
  );
}

export default Dashboard;
