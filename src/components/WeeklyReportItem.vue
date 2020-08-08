<template>
  <div v-if="project" class="projectItem">
    <h6 style="margin:auto">{{ project.project_name }}</h6>
    <div v-for="(task, index) in project.tasks" :key="index" class="caption">
      <TaskItem :task="task" />
    </div>
  </div>
</template>

<script>
import TaskItem from "./TaskItem";

export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  components: {
    TaskItem
  }
};
</script>

<style scoped>
.projectItem {
  border-radius: 20px;
  width: 100%;
  margin: 1em;
}
</style>
