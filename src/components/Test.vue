<script setup lang="ts">
import { ref } from 'vue';

let name = ref('');
let init = ()=>{
  name.value = '';
}
</script>

<template>
  <div>
    <input v-model="name" placeholder="이름"/>
  </div>
  <div v-if="name != ''">
    {{ name }}님 안녕하세요.
    <button @click="init()">초기화</button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}
</style>
