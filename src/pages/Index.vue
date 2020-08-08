<template>
  <q-page class="flex flex-center">
    <TaskActivity :projects = "projects"/>
    <WeeklyReport :projects = "projects.projects"/>
  </q-page>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import TaskActivity from '../components/TaskActivity';
import WeeklyReport from '../components/WeeklyReport'
import store from '../store';

export default {
  name: 'PageIndex',
  components : {
    TaskActivity,
    WeeklyReport
  },
  computed: {
    ...mapState({
      projects: state => state.projects
    })
  },
}
</script>
