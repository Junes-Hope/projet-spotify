async function chargerTracks() {
  const response = await fetch("data/data.json"); // on attend la réponse du serveur
  const data = await response.json();             // on attend la conversion en objet JS
  return data;                                    // on renvoie les données
}
