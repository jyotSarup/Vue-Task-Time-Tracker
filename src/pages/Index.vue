<template>
  <q-page class="flex flex-center">
    <TaskActivity :projects = "projects"/>
  </q-page>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import TaskActivity from '../components/TaskActivity';
import store from '../store';

export default {
  name: 'PageIndex',
  components : {
    TaskActivity
  },
  computed: {
    ...mapState({
      projects: state => state.projects
    })
  },
}
</script>
