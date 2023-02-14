
<script setup lang="ts">
import { ref } from 'vue';
const input = ref('');
const output = ref(0);


const addStr = function(proxy){
  input.value += proxy.target.innerText;
}
const calc = () =>{
  output.value = eval(input.value);
}
const clear = () =>{
  output.value = 0;
  input.value = '';
}
const del = () =>{
  input.value = input.value.slice(0,input.value.length-1);
}
</script>

<template>
  <div>
      <input v-model="input"><br />
      <input v-model="output"><br />
      <button @click="addStr($event)">/</button>
      <button @click="clear()">AC</button>
      <button @click="del()">DEL</button>
      <button>&nbsp;</button>
      <br/>
      <button @click="addStr($event)">7</button>
      <button @click="addStr($event)">8</button>
      <button @click="addStr($event)">9</button>
      <button @click="addStr($event)">*</button>
      <br/>
      <button @click="addStr($event)">4</button>
      <button @click="addStr($event)">5</button>
      <button @click="addStr($event)">6</button>
      <button @click="addStr($event)">-</button>
      <br/>
      <button @click="addStr($event)">1</button>
      <button @click="addStr($event)">2</button>
      <button @click="addStr($event)">3</button>
      <button @click="addStr($event)">+</button>
      <br />
      <button>&nbsp;</button>
      <button @click="addStr($event)">0</button>
      <button @click="addStr($event)">.</button>
      <button @click="calc()">=</button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

input {
  width: 200px;
  height: 50px;
  text-align: right;
  font-size: 30px;
  font-weight: bold;
}

button {
  width: 50px;
  height: 50px;
}
</style>