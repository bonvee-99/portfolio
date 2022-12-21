<template>
  <section>
    <h2>{{ currentItem.title }}</h2>
    <h5>@ {{ currentItem.company }}</h5>
    <span class="date">{{ currentItem.dateRange + ' | ' + currentItem.location }}</span>
    <ul>
      <li v-for="(item, index) in currentItem.description" :key="index">
        {{ item }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "ExperienceCard",
  props: {
    currentItem: Object
  }
}
</script>

<style lang="scss" scoped>
</style>
