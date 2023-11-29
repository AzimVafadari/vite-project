<script setup lang="ts">
import { ref } from 'vue'
import { useCounterStore } from '../store/useCounterStore'
import { Product } from '../store/ProductType'

const userStore = useCounterStore()

var products: Product[];

var id : string;
var title: string;

function search(id:string, title: string) {
  products = userStore.products.filter((product) => {return product.id == id && product.title == title})
};

function add(){
  userStore.AddToProduct();
}
function remove(){
  userStore.RemoveFromProduct(id);
}
</script>

<template>
  <input type="text" value="id">
  <input type="text" value="title">
  <button @click="search(id, title)">search</button>
  <div v-for="product in products">{{product}}</div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
