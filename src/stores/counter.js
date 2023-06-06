// 定义关于counter的store
import { defineStore } from "pinia";

const useCounter = defineStore("counter", {
  state: () => ({
    count: 99,
    name: "wanggaomin",
    age: 18,
    total: 100
  })
});
defineStore('user',{})
defineStore('user',{})
// defineStore('home',{})

export default useCounter