<script setup lang="ts">
defineProps<{ // props = properties
  name: string,
  type: string,
  price: string
}>()
</script>

<template>
  <h1>{{ name }}</h1>
  <h2>종류 : {{ type }}</h2>
  <h2 v-if="price != '0'">가격 : {{ price }}원</h2>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}
</style>
