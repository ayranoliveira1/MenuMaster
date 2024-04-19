import { getBurgues } from "./services/burgues/getBurgues";
import { getDrinks } from "./services/drinks/getDrinks";

// listar drinks
const listardrinks = () => {
   document.querySelector("#drinks-button")?.addEventListener("click", () => {
      document.querySelector("#burgues")?.classList.add("hidden");
      document.querySelector("#drinks-button")?.classList.add("bg-[#FFBF00]");
      document.querySelector("#burgues-button")?.classList.remove("bg-amarelo");
      document.querySelector("#drinks")?.classList.remove("hidden");
   });
};

//listar burgues
const listarburgues = () => {
   document.querySelector("#burgues-button")?.addEventListener("click", () => {
      document.querySelector("#drinks")?.classList.add("hidden");
      document.querySelector("#burgues-button")?.classList.add("bg-amarelo");
      document
         .querySelector("#drinks-button")
         ?.classList.remove("bg-[#FFBF00]");
      document.querySelector("#burgues")?.classList.remove("hidden");
   });
};

// chamando as funções
getBurgues();
getDrinks();
listardrinks();
listarburgues();
