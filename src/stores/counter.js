// 定义关于counter的store
import { defineStore } from "pinia";

const useCounter = defineStore('counter',{
  state: () => ({
    count: 99
  })
})
// defineStore('user',{})
// defineStore('home',{})

export default useCounter