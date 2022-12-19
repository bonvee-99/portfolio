<template>
  <div class="terminal" @click="focus">
    <div class="history">
      <div v-for="(item, index) in history" :key="index">{{ item }}</div>
    </div>
    <div class="line">
      <span>{{ section + prefix }}</span>
      <input ref="input" type="text" v-model="input" @keydown="handleInput">
    </div>
  </div>
</template>

<script>

export default {
  name: 'TerminalClient',
  data() {
    return {
      section: 'home',
      prefix: '$',
      history: [],
      input: '',
      lastKeyCode: 0,
      lastInputTimestamp: 0
    }
  },
  methods: {
    handleInput(e) {
      if (e.keyCode === 13) {
        if (this.input === "clear") {
          this.history = []
        } else {
          this.history.push(this.input)
        }
        this.input = ''
      } else if (e.keyCode === 76 && this.lastKeyCode === 17 && Date.now() < this.lastInputTimestamp + 500) {
        this.history = []
      }
      this.lastKeyCode = e.keyCode
      this.lastInputTimestamp = Date.now()
    },
    focus() {
      this.$refs.input.focus()
    }
  }
}
</script>

<style scoped>

.terminal {
  width: 500px;
  height: 500px;
  background-color: black;
  overflow: hidden;
}

.history {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #fff;
}

.history div {
  word-break: normal;
}

.line {
  display: flex;
  align-items: flex-start;
  width: 100%;
  color: #fff;
  font-weight: bold;
}

.line input {
  width:100%;
  border: none;
  background: black;
  color: white;
  outline: none;
  font-size: 16px;
}
</style>
