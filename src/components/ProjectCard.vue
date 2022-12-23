<template>
  <section>
    <h2>
      <a :href="currentItem.webLink">{{ currentItem.title }}</a>
      <a :href="currentItem.ghLink">
        <GithubIcon />
      </a>
    </h2>
    <h5>{{ currentItem.tools }}</h5>
    <span class="date">{{ currentItem.dateRange  }}</span>
    <ul>
      <li v-for="(item, index) in currentItem.description" :key="index">
        {{ item }}
      </li>
    </ul>
    <img v-if="currentItem.imageFile" :src="getImgUrl(currentItem.imageFile)"/>
    <img v-if="currentItem.gifFile" :src="getGifUrl(currentItem.gifFile)"/>
  </section>
</template>

<script>
import GithubIcon from '@/components/GithubIcon.vue'

export default {
  name: "ProjectCard",
  components: {
    GithubIcon
  },
  props: {
    currentItem: Object
  },
  methods: {
    getImgUrl(img) {
      const images = require.context('../assets/', false, /\.png$/)
      return images('./' + img + ".png")
    },
    getGifUrl(gif) {
      const gifs = require.context('../assets/', false, /\.gif$/)
      return gifs('./' + gif + ".gif")
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables';

img {
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

h2 > a:hover {
  color: $pill-color;
}
</style>
