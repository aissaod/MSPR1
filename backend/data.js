// backend/data.js
let storedData = []; // Tableau pour stocker les données

const addData = (data) => {
    storedData.push(data); // Ajouter les nouvelles données
};

module.exports = { storedData, addData };
