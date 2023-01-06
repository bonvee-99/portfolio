<template>
  <section>
    <h2>Extracurriculars</h2>
    <div class="extraCurr" v-for="(ec, index) in currentItem.list" :key="index">
      <h4>{{ ec.title }}</h4>
      <span class="date">{{ ec.dateRange  }}</span>
      <p>{{ ec.description }}</p>
    </div>
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

section {
  padding-bottom: 20px;
}

h2 {
  text-align: center;
}

.extraCurr {
  margin: 25px 0;
  text-align: center;
}

h4 {
  margin: 0;
}

p {
  margin: 0;
}
</style>
