<template>
  <div id="app">
    <pagea/>
    <pageb/>
  </div>
</template>

<script>
import pagea from './components/a.vue'
import pageb from './components/b.vue'
export default {
  name: 'app',
  components: {
    pagea,
    pageb
  }
}
</script>

<style>

</style>
