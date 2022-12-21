<template>
  <div class="home-container">
    <TerminalClient :updateItem="updateItem" :resume="resume"/>
    <InfoDisplayer :currentItem="currentItem"/>
  </div>
</template>

<script>
import TerminalClient from '@/components/TerminalClient.vue'
import InfoDisplayer from '@/components/InfoDisplayer.vue'

export default {
  name: "HomePage",
  components: {
    TerminalClient,
    InfoDisplayer
  },
  props: {
    resume: Object
  },
  data() {
    return {
      currentItem: { msg: "hello" }
    }
  },
  methods: {
    updateItem (item) {
      this.currentItem = item
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables';

.home-container {
  display: flex;
  justify-content: space-around;
}
</style>
