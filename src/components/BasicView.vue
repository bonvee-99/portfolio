<template>
  <div class="main-container">
    <h1>Experience</h1>
    <ExperienceCard v-for="(exp, index) in resume.experience" :currentItem="exp" :key="index"/>
    <h1>Skills</h1>
    <SkillsCard :currentItem="resume.skills"/>
    <h1>Education</h1>
    <EducationCard :currentItem="{ list: resume.education }"/>
    <h1>Projects</h1>
    <ProjectCard v-for="(p, index) in resume.projects" :currentItem="p" :key="index"/>
    <ExtracurricularsCard :currentItem="{ list: resume.extracurriculars }"/>
  </div>
</template>

<script>
import ExperienceCard from '@/components/ExperienceCard.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import SkillsCard from '@/components/SkillsCard.vue'
import EducationCard from '@/components/EducationCard.vue'
import ExtracurricularsCard from '@/components/ExtracurricularsCard.vue'

export default {
  name: 'BasicView',
  components: {
    ExperienceCard,
    ProjectCard,
    SkillsCard,
    EducationCard,
    ExtracurricularsCard
  },
  props: {
    resume: Object
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables';

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $bg-color;

  section {
    width: 80%;
  }
}

@media only screen and (min-width:800px) {
  .main-container {
    section {
      width: 40%;
    }
  }
}
</style>
