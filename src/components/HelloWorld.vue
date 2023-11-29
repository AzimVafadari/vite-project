<script setup lang="ts">
import { ref } from 'vue'
import { useCounterStore } from '../store/useCounterStore'
import { Product } from '../store/ProductType'

const userStore = useCounterStore()

var products: Product[];

var id : string;
var title: string;

var showlightgreen: boolean;
var showAnyColor: boolean = true;

function search(id:string, title: string) {
  products = userStore.products.filter((product) => {return product.id == id && product.title == title})
};

function add(){
  userStore.AddToProduct();
}
function remove(id){
  userStore.RemoveFromProduct(id);
}
function changeColor(){
  if(showAnyColor){
    showlightgreen = true;
    showAnyColor = false;
  }else{
    showAnyColor = true;
    showlightgreen = false;
  }
}
</script>

<template>
  <p>vfdv</p>
  <input type="text" value="id">
  <input type="text" value="title">
  <button @click="search(id, title)">search</button>
  <div v-for="product in products">
    <button @dblclick="remove(product.id)" v-if="showAnyColor">{{product.id}}</button>
    <button class="g" @dblclick="remove(product.id)" v-if="showlightgreen">{{product.id}}</button>
  </div>
</template>

<style scoped>
.g {
  background-color: #2dbe10;
}

</style>
