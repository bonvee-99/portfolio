<template>
  <nav>
    <a href="#/">Home</a>
    <a href="#/basic">Basic View</a>
  </nav>
  <section class="intro" v-if="this.currentPath === '#/' || this.currentPath === ''">
    <h1>Welcome to my website!</h1>
    <p>
      My name is Ben Vinnick and I am a 3rd year Computer Science student at the University of British Columbia. I am currently on Co-op working as a Software Developer. I also have worked as a teaching assistant at UBC for over a year. I am mainly interested in software architecture and engineering, as well as some security and distributed systems. I also like Muay Thai, hockey, walks, and video games. To read more about me you can either: (1) use the fun 'CLI' below (2) see everything at once <a href="#/basic">here</a> or (3) <a :href="`${publicPath}resume.pdf`" target="_blank">download</a> my resume.
    </p>
    <img>
  </section>
  <component :is="currentView" :resume="resume"/>
</template>

<script>
import BasicView from '@/components/BasicView.vue'
import HomePage from '@/components/HomePage.vue'
import NotFound from '@/components/NotFound.vue'

import Resume from '@/assets/resume.js'

const routes = {
  "/": HomePage,
  "/basic": BasicView
}

export default {
  name: 'App',
  components: {
    HomePage,
    BasicView
  },
  mounted () {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
    })
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  data () {
    return {
      resume: Resume,
      currentPath: window.location.hash,
      publicPath: process.env.BASE_URL
    }
  }
}


</script>

<style lang="scss">
@import '@/styles/variables';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: $bg-color;
  color: $text-color;
}

html, body {
  margin:0;
  padding:0;
  height:100%;
  background-color: $bg-color;
}

nav {
  display: flex;
  justify-content: center;
  padding: 20px;

  a {
    font-size: 20px;
    margin: 10px;
    color: $text-color;
  }

  a:hover {
    color: $pill-color;
  }
}

.date {
  font-style: italic;
  font-size: 14px;
  color: $grey-color;
}

ul {
  padding: 5px 15px 15px 15px;
}

h2 {
  margin-bottom: 0;
}

h5 {
  margin: 0;
}

.intro {
  width: 60%;
  margin: 0 auto;
  text-align: center;

  h1 {
    color: $blue-color;
  }
}
</style>
