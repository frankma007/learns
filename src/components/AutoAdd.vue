<template>
  <div style="background:lightblue">
<h3>
  {{$store.state.count}} --{{$store.getters.optCount}}
</h3>
  </div>
</template>
<script>
export default {
   name: "AutoAdd",

  
}
</script>
