<template>
  <section>
    <h2>{{ currentItem.title }}</h2>
    <h5>{{ currentItem.tools }}</h5>
    <span class="date">{{ currentItem.dateRange  }}</span>
    <a :href="currentItem.ghLink">GitHub</a>
    <ul>
      <li v-for="(item, index) in currentItem.description" :key="index">
        {{ item }}
      </li>
    </ul>
    <img v-if="currentItem.asset" :src="getImgUrl(currentItem.asset)"/>
  </section>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    currentItem: Object
  },
  methods: {
    getImgUrl(img) {
      var images = require.context('../assets/', false, /\.png$/)
      return images('./' + img + ".png")
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}
</style>
