<template>
  <div >
    
    <div class="amap-wrapper">
      <el-amap
        class="amap-box"
        vid="amap-vue"
        :zoom="zoom"
        :center="center"
      ></el-amap>
    </div>
    
 
  </div>
</template>

<script>

export default {
  name: "Map",
  data() {
    return {
      zoom: 10,
      center: [112.5862, 37.8268],
    };
  },
};
</script>

<style>
.amap-wrapper {
  width: 800px;
  height: 800px;
  float: right;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
