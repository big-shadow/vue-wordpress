<template>
  <div>
    <div v-for="(quote, i) in quotes" :key="i">
      <h4 class="quote" v-html="quote"/>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'quotes',
  computed: {
    quotes() { return this.$quotes.getQuotes(); }
  }
}
</script>

<style scoped>
.quote {
  padding-top: 0.4rem;
  text-align: center;
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
}
</style>
