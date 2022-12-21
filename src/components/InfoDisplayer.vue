<template>
  <div class="info-container">
    <ExperienceCard v-if="currentItem.type === 'experience'" :currentItem="currentItem"/>
    <ProjectCard v-else-if="currentItem.type === 'project'" :currentItem="currentItem"/>
    <SkillsCard v-else-if="currentItem.type === 'skills'" :currentItem="currentItem.list"/>
    <EducationCard v-else-if="currentItem.type === 'education'" :currentItem="currentItem"/>
    <ExtracurricularsCard v-else-if="currentItem.type === 'extracurriculars'" :currentItem="currentItem"/>
    <h2 v-else>Select an option to see more!</h2>
  </div>
</template>

<script>

import ExperienceCard from '@/components/ExperienceCard.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import SkillsCard from '@/components/SkillsCard.vue'
import EducationCard from '@/components/EducationCard.vue'
import ExtracurricularsCard from '@/components/ExtracurricularsCard.vue'

export default {
  name: 'InfoDisplayer',
  components: {
    ExperienceCard,
    ProjectCard,
    SkillsCard,
    EducationCard,
    ExtracurricularsCard
  },
  props: {
    currentItem: Object
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables';

.info-container {
  width: 40%;
  background-color: $bg-color;
  color: $text-color;
}
</style>
