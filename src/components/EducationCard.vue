<template>
  <section v-for="(school, index) in currentItem.list" :key="index">
    <h2>{{ school.degree }}</h2>
    <h5>@ {{ school.school }}</h5>
    <span class="date">{{ school.dateRange + ' | ' + school.location }}</span>
    <h6>{{ "Faculty of " + school.faculty }}</h6>
    <h4>{{ "Cumulative GPA: " + school.cumGpa}}</h4>
    <h4>{{ school.awards }}</h4>
    <h3>Courses</h3>
    <ul>
      <li v-for="(s, index) in school.courses" :key="index">{{ s }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "EducationCard",
  props: {
    currentItem: Object
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables';

h6 {
  margin: 2px 0;
}

h4 {
  margin: 4px 0;
  color: $pill-color;
}

h3 {
  margin-bottom: 0;
}
</style>
