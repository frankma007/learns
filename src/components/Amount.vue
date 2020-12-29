<template>
  <div style="background:lightcoral">
    {{this.$store.state.count}}
<input type="button" value="减少" @click="remove">
<input type="button" value="增加" @click="add">
<br>
<input type="text" value="减少" v-model="$store.state.count">

  </div>
</template>
<script>
export default {
   name: "Amount",
   data () {
      return {
        
      }
  },
  methods:{
    add(){
      this.$store.commit("increment")
    },
    remove(){
     this.$store.commit("subtract",{val:1})
    }
  }
  
}
</script>
