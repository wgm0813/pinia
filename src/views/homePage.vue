<template>
  <div>homePage子组件
    <h2>count: {{ counterStore.count }}</h2>
    <h2>解构count: {{ count }}</h2>
    <button @click="incrementCount">count+1</button>

    <h3>name: {{ counterStore.name }}</h3>
    <h3>age: {{ counterStore.age }}</h3>
    <h3>total: {{ counterStore.total }}</h3>
    <button @click="update">修改</button>
    <button @click="reset">恢复</button>
  </div>
</template>

<script setup>
import useCounter from '@/stores/counter';
import { storeToRefs } from 'pinia';
// import { toRef } from 'vue';
const counterStore = useCounter()
// 解构的展示，只有值，不是响应式

// 1、变成响应式：toRefs()
// 2、pinia自带的storeToRefs
// const {count} = toRef(counterStore);
const {count} = storeToRefs(counterStore);
function incrementCount() {
  counterStore.count++; 
}
function update(){
  // 1、一个个修改状态
  // counterStore.name = '王高敏';
  // counterStore.age = 23;
  // counterStore.total = 180;

  // 2、一次性修改多个状态
  // counterStore.$patch({
  //   name: 'james',
  //   age: 35
  // })

  // 3、替换state为新的对象
  const oldState = counterStore.$state;
  counterStore.$state = {
    name: '22222222',
    total: '1111111'
  }
  console.log(counterStore.$state === oldState);//true
}
function reset(){
  counterStore.$reset()
}
</script>

<style>

</style>