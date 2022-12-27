<template>
  <nav>
    <a href="#/">Home</a>
    <a href="#/basic">Basic View</a>
  </nav>
  <section class="intro" v-if="this.currentPath === '#/' || this.currentPath === ''">
    <div>
      <h1>Welcome to my website!</h1>
      <p>
        My name is Ben Vinnick and I am a 3rd year Computer Science student at the University of British Columbia. I am currently on Co-op working as a Software Developer. I also have worked as a teaching assistant at UBC for over a year. 
      </p>
      <p>
        I am mainly interested in software architecture and engineering, as well as some security and distributed systems. I also like Muay Thai, hockey, walks, and video games. 
      </p>
    </div>
    <img src="@/assets/lucy.webp">
    <div>
      <p>
        To read more about me you can:
      </p>
      <ul>
        <li>(1) use the fun 'CLI' below</li>
        <li>(2) see everything at once <a href="#/basic">here</a></li>
        <li>(3) <a :href="`${publicPath}resume.pdf`" target="_blank">download</a> my resume</li>
      </ul>
    </div>
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
  box-sizing: border-box;
  height: 10vh;

  a {
    font-size: 20px;
    margin: 10px;
    color: $blue-color;
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
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
  margin: 0 auto;

  h1 {
    color: $text-color;
    text-align: center;
  }

  a {
    color: $blue-color;
  }

  a:hover {
      color: $pill-color;
  }

  img {
    border-radius: 50%;
    border: 4px solid $pill-color;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    width: 50%;
    margin: 20px 0;
  }

  ul {
    list-style-type: none;
  }
}

@media only screen and (min-width:800px) {
  .intro {
    width: 75%;

    img {
      width: 25%;
    }
  }
}
</style>
