// Exemple : création dynamique des cartes de formation
const formations = [
    { titre: "ENAREF Cycle B", texte: "Cours adaptés, QCM actualisé, accompagnement personnalisé.", image: "design.jpeg", lien: "paiement.html" },
    { titre: "ENSOA", texte: "Intégrez les rangs des sous-officiers militaires.", image: "boyjoy.jpeg", lien: "paiement.html" },
    { titre: "Professeur des écoles", texte: "Formation complète pour le concours 1.", image: "girl.jpeg", lien: "paiement.html" },
    // Ajoute ici toutes tes autres formations
];

const container = document.getElementById("cards-container");

formations.forEach(f => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";
    col.innerHTML = `
        <div class="card">
            <img src="${f.image}" class="card-img-top" alt="${f.titre}">
            <div class="card-body">
                <h5 class="card-title">${f.titre}</h5>
                <p class="card-text">${f.texte}</p>
                <a href="${f.lien}" class="btn btn-primary">Voir plus</a>
            </div>
        </div>
    `;
    container.appendChild(col);
});
async function chargerConcours() {
  try {
    const response = await fetch("datas.json");
    const concours = await response.json();

    const container = document.getElementById("cards-container");
    container.innerHTML = "";

    concours.forEach(c => {
      const card = document.createElement("div");
      card.className = "col-md-4 mb-4";

      card.innerHTML = `
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${c.nom}</h5>
            <p class="card-text">
              <strong>Type :</strong> ${c.type}<br>
              <strong>Nombre de lauréats :</strong> ${c.laureats}<br>
              <strong>Âge :</strong> ${c.age_min} - ${c.age_max} ans<br>
              <strong>Durée formation :</strong> ${c.duree_formation}<br>
              <strong>Frais :</strong> ${c.frais_inscription} FCFA<br>
              <strong>Date composition :</strong> ${c.date_composition}<br>
              <strong>Dépôt :</strong> ${c.date_debut_depot} → ${c.date_fin_depot}<br>
              <strong>Centres :</strong> ${c.centre_composition.join(", ")}
            </p>
          </div>
        </div>
      `;
      container.appendChild(card);
    });

  } catch (error) {
    console.log("Erreur lors du chargement des concours :", error);
  }
}
chargerConcours();
