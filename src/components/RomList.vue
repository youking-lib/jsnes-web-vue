<template>
  <div class="romList">
    <button @click="Loading">Loading</button>
    <button @click="Loaded">Loaded</button>
    <button @click="Err">Error</button>
  </div>
</template>

<script>
  export default {
    name: 'romList',
    data () {
      return {
      }
    },
    methods: {
      Loading () {
        this.$emit('onLoading')
      },
      Loaded () {
        this.$emit('onLoaded')
      },
      Err () {
        this.$emit('onError')
      }
    }
  }
</script>
