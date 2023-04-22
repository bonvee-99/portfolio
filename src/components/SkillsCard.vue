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
  justify-content: center;

  div {
    width: 50%;
  }

  h2 {
    text-align: center;
  }
}

ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style-type: none;
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
