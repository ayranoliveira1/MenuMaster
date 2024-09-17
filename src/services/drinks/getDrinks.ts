import axios from "axios";

export const getDrinks = async () => {
   try {
      const response = await axios({
         method: "GET",
         url: `http://localhost:4444/drinks`,
      });

      console.log(response.data.drinks);
      const drinks = response.data.drinks;

      drinks.map((drinks: any) => {
         const cardItem = `
            <div
               class="card-item flex flex-col items-center shadow-xl rounded-3xl mt-4 bg-branco w-[260px] h-[340px] hover:bg-amarelo"
            >
               <div class="w-[220px] h-[220px] mt-4 rounded-3xl bg-white flex items-center">
                  <img src="${
                     drinks.imageURL
                  }" alt="" width="220" height="220" class="rounded-3xl"/>
               </div>

               <p class="name text-xl mt-4">${drinks.name}</p>

               <p class="price text-xl mt-2 text-amarelo">R$ ${Number(
                  drinks.price
               )
                  .toFixed(2)
                  .replace(".", ",")}</p>

               <div class="flex mt-2 ml-14">
                  <button
                     class="hidden add-item border border-black px-3 text-base"
                  >
                     -
                  </button>

                  <div
                     class="hidden quant-item border border-black px-5 items-center"
                  >
                     0
                  </div>

                  <button
                     class="hidden dim-item border border-black px-2 text-base"
                  >
                     +
                  </button>

                  <button
                     class="carrinho hidden ml-5 bg-black px-2 py-1 rounded-3xl items-center justify-center"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-bag-check-fill text-branco" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0m-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"/>
                     </svg>
                  </button>
               </div>
             `;

         document.querySelector("#drinks")!.innerHTML += cardItem;
      });
   } catch (error) {
      console.log(error);
   }
};
