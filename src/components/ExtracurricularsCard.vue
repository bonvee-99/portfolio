<template>
  <section class="ec-container">
    <h2>Extracurriculars</h2>
    <ul>
      <li v-for="(ec, index) in currentItem.list" :key="index">
        {{ ec }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "ExtracurricularsCard",
  props: {
    currentItem: Object
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables';
</style>
