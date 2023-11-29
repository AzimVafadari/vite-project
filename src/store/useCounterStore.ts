import { defineStore } from "pinia"
import { Product } from "./ProductType"
import { nanoid } from "nanoid"

export const useCounterStore = defineStore('counter', {
    state: () => {
      return {
        products: [] as Product[],
      }
    },
    actions: {
      AddToProduct() {
        const idg: string = nanoid();
        this.products.push({id: idg, title: idg})
      },
      RemoveFromProduct(id: string) {
        this.products.fillter((product) => {return product.id != id})
      },
    },
  })