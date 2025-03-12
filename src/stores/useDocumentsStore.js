import { defineStore } from "pinia";
import { supabase } from "/src/supabase"; // Assure-toi d'avoir bien importé Supabase

export const useDocumentsStore = defineStore("documents", {
  state: () => ({
    documents: [],
  }),
  actions: {
    async fetchDocuments() {
      const { data, error } = await supabase
        .from("documents")
        .select("id, annee, matiere, title, url"); // On sélectionne bien les colonnes nécessaires

      if (error) {
        console.error("Erreur lors de la récupération des documents :", error);
      } else {
        this.documents = data;
      }
    },
  },
});