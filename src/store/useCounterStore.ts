import { defineStore } from "pinia"
import { Product } from "./ProductType"

export const useCounterStore = defineStore('counter', {
    state: () => {
      return {
        products: [] as Product[],
      }
    },
    actions: {
      AddToProduct() {
        this.products.push({id: "1", title: "fruit"})
      },
      RemoveFromProduct(id: string) {
        this.products.fillter((product) => {return product.id != id})
      },
    },
  })