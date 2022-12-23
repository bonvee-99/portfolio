<template>
  <section class="terminal" @click="focus">
    <div class="line">
      <div>{{ section + prefix }}</div>
      <input ref="input" type="text" v-model="input" @keydown="handleInput">
    </div>
    <div class="history">
      <div v-for="(item, index) in history" :key="index">{{ item }}</div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'TerminalClient',
  props: {
    resume: Object,
    updateItem: Function
  },
  data() {
    return {
      section: 'home',
      prefix: ' $',
      history: [],
      input: '',
      lastKeyCode: 0,
      lastInputTimestamp: 0,
      helpMessage: {
        type: "help",
        message: "Beside your cursor it will say your current section. To get back to home type 'quit'. To clear the output history type 'clear' or 'ctrl' + 'l'. Follow the instructions printed to get more info on experience, projects, etc."
      }
    }
  },
  mounted() {
    this.initMessage()
  },
  methods: {
    handleInput(e) {
      if (e.keyCode === 13) {
        this.processCommand(this.input, this.section)
        // todo fix this !!!  can get way too big
        /* const max = 16 */
        /* if (this.history.length > max) { */
        /*   this.history = this.history.slice(this.history.length - max, this.history.length) */
        /* } */
        this.input = ''
      } else if (e.keyCode === 76 && this.lastKeyCode === 17 && Date.now() < this.lastInputTimestamp + 500) {
        this.history = []
      }
      this.lastKeyCode = e.keyCode
      this.lastInputTimestamp = Date.now()
    },
    focus() {
      this.$refs.input.focus()
    },
    processCommand(input, section) {
      if (this.input === "clear") {
        this.history = []
      } else if (this.input === "help") {
          this.history.push(this.input)
          this.history.push(this.helpMessage.message)
      } else if (this.input === "quit") {
          this.history.push(this.input)
          this.history.push("Navigated to home")
          this.initMessage()
          this.section = "home"
      } else {
        this.history.push(this.input)
        switch (section) {
          case "home":
            this.handleHome(input)
            break
          case "experience":
            this.handleExperience(input)
            break
          case "projects":
            this.handleProjects(input)
            break
          default:
           this.history.push(`Unknown command: ${this.input}`)
        }
      }
    },
    handleHome(input) {
      switch(Number(input)) {
        case 0:
          this.section = "experience"
          this.history.push("Navigated to experience")
          this.history.push("Type 'quit' to go to home")
          this.resume.experience.forEach((e, i) => {
            this.history.push(`(${i}): ${e.title}`)
          })
          break
        case 1:
          this.section = "projects"
          this.history.push("Navigated to projects")
          this.history.push("Type 'quit' to go to home")
          this.resume.projects.forEach((p, i) => {
            this.history.push(`(${i}): ${p.title}`)
          })
          break
        case 2:
          this.updateItem({ type: "skills", list: this.resume.skills })
          break
        case 3:
          this.updateItem({ type: "education", list: this.resume.education })
          break
        case 4:
          this.updateItem({ type: "extracurriculars", list: this.resume.extracurriculars })
          break
        default:
          this.history.push(`Unknown command: ${this.input}`)
      }
    },
    handleExperience(input) {
      const experience = this.resume.experience[input]
      if (experience) {
        this.updateItem(experience)
      } else {
        this.history.push("Experience not found. Please choose a number in the given list")
      }
    },
    handleProjects(input) {
      const project = this.resume.projects[input]
      if (project) {
        this.updateItem(project)
      } else {
        this.history.push("Project not found. Please choose a number in the given list")
      }
    },
    initMessage() {
      this.history.push("Please choose from the following to see more:")
      Object.entries(this.resume).forEach(([key,], index) => {
        this.history.push(`(${index}): ${key}`)
      });
      this.history.push("Type 'help' for more instructions")
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables';

.terminal {
  display: flex;
  flex-direction: column-reverse;
  height: 500px;
  background-color: $text-color;
  overflow: scroll;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  opacity: 0.91;
}

.history {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: $bg-color;
}

.history div {
  word-wrap: break-word;
  font-size: $terminal-font-size;
}

.line {
  display: flex;
  align-items: flex-start;
  width: 100%;
  color: $bg-color;
  font-weight: bold;
  font-size: $terminal-font-size;

  input {
    border: none;
    background: $text-color;
    color: $bg-color;
    outline: none;
    font-size: $terminal-font-size;
  }
}

</style>
