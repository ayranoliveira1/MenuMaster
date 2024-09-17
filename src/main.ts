import { getBurgues } from "./services/burgues/getBurgues";
import { getDrinks } from "./services/drinks/getDrinks";

// listar drinks
const listardrinks = () => {
   document.querySelector("#drinks-button")?.addEventListener("click", () => {
      document.querySelector("#burgues")?.classList.add("hidden");
      document.querySelector("#drinks-button")?.classList.add("amarelo");
      document.querySelector("#drinks")?.classList.add("flex");
      document.querySelector("#burgues-button")?.classList.remove("amarelo");
      document.querySelector("#drinks")?.classList.remove("hidden");
   });
};

//listar burgues
const listarburgues = () => {
   document.querySelector("#burgues-button")?.addEventListener("click", () => {
      document.querySelector("#drinks")?.classList.add("hidden");
      document.querySelector("#burgues-button")?.classList.add("amarelo");
      document.querySelector("#drinks-button")?.classList.remove("amarelo");
      document.querySelector("#burgues")?.classList.remove("hidden");
   });
};

// diminuir quantidade
export function dimQuantItem(id: string) {
   let quantAtual = Number(document.querySelector(`#quant-${id}`)!.textContent);

   if (quantAtual > 0) {
      document.querySelector(`#quant-${id}`)!.textContent = String(
         quantAtual - 1
      );
   }
   console.log(quantAtual);
}

// aumentar quantidade
export function addQuantItem(id: string) {
   let quantAtual = Number(document.querySelector(`#quant-${id}`)!.textContent);

   document.querySelector(`#quant-${id}`)!.textContent = String(quantAtual + 1);

   console.log(quantAtual);
}

// chamando as funções
getBurgues();
getDrinks();
listardrinks();
listarburgues();
