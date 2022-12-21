<template>
  <section class="skills-container">
    <div v-for="(value, key) in currentItem" :key="key">
      <h2>{{ key }}</h2>
      <ul>
        <li v-for="(item, index) in value" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "SkillsCard",
  props: {
    currentItem: Object
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables';

.skills-container {
  display: flex;
  flex-wrap: wrap;

  div {
    width: 50%;
  }
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}

li {
  color: $bg-color;
  background-color: $pill-color;
  border-radius: 10px;
  padding: 5px 10px;
  margin-right: 4px;
  margin-bottom: 8px;
  text-align: center;
}
</style>
