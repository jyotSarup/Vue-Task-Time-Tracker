<template>
  <div v-if="projects" class="reportDiv">
    <div v-for="(project, index) in projects" :key="index" class="caption">
      <WeeklyReportItem :project="project" />
    </div>
  </div>
</template>

<script>
import WeeklyReportItem from "../components/WeeklyReportItem";

export default {
  props: {
    projects: {
      type: Object,
      required: true
    }
  },
  components: {
    WeeklyReportItem
  },
  created() {
    console.log(this.projects);
  }
};
</script>

<style scoped>
.reportDiv {
  width: 90%;
  text-align: center;
  margin: 1em;
}

@media screen and (min-width: 850px) {
  .reportDiv {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
  }
}

</style>
