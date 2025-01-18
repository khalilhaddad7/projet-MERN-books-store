function getImgUrl(name) {
    try {
      // Crée l'URL en fonction du chemin donné
      return new URL(`../pages/books/${name}`, import.meta.url);
    } catch (error) {
      console.error("Erreur lors de la génération de l'URL :", error);
      return ""; // Retourne une chaîne vide en cas d'erreur
    }
  }
  export { getImgUrl };
  