<script>
declare interface Food { 
  // ts에서 인터페이스는 데이터 타입 위주, 굳이 따지자면 VO 형태라고 이해하면 됨
  name : string,
  price : number
}
</script>
<script setup lang="ts">

import { onMounted,ref type Ref} from 'vue';
import axios from 'axios';

const foods:Ref<Food[]> = ref([]);
onMounted(async () => { // onload와 비슷
  const response = await axios.get('http://localhost:3300/test');
  foods.value = response.data;
  console.log(foods.value);
});
</script>


<template>
  
  <h2>푸드 리스트</h2>
  <div>
    <ul>
      <li v-for="food in foods">{{ food.name }} : {{ food.price }}원</li>
    </ul>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}
</style>
