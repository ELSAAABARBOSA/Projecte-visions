<template>
  <NavComp />
  <router-view/>
  <FootNav />
</template>

<script>
  import NavComp from "@/components/NavComp.vue"
  import FootNav from "@/components/FootNav.vue"
  export default {
    name: "App",
    components: {
      NavComp,
      FootNav
    }
  }
</script>
<style>
#app {
  color: #2c3e50;
}
</style>
