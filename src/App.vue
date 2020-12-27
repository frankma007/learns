<template>

  <div id="app"> 
  <div>我是从store中拿到的count:{{count}}</div>
 <!-- {{mapState(['name'])}} -->
  
    <router-view/>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
export default {
  name: 'App',
  computed: {
            ...mapState(['count'])//将vuex store中的state.count映射到this.count中
            // 在computed对象中可以计算比较对象
  },
  methods: {
  // ...mapActions(['modifyName']),
  do(){
    console.log(this.count)
  }
      
 

  },
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
