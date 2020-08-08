<template>
  <div class="recordActivityDiv">
    <h4 class="recordActivityHeading">Task Activity</h4>
    <div >
      <div v-if="!activityStarted" class="timerButtonDiv">
        <q-btn
          icon="timer"
          label="Start Activity"
          stack
          glossy
          color="green"
          @click="startActivity"
        />
      </div>
      <div v-else class="timerButtonDiv">
        
        <q-btn
          icon="timer_off"
          label="Stop Activity"
          stack
          glossy
          color="red"
          @click="stopActivity"
        />
        <h6>Activity Started at : {{startedActivityTime.substr(0,25)}}</h6>
      </div>
    </div>
  </div> </template
>;

<script>
import { mapActions, mapState } from 'vuex';
import store from '../store';

export default {
  data() {
    return {
      activityStarted: false,
      startedActivityTime: ""
    };
  },
  methods: {
    startActivity() {
      this.startedActivityTime = (new Date()).toString();
      this.activityStarted = true;
      localStorage.startedActivityTime = this.startedActivityTime;
      localStorage.activityStarted = this.activityStarted;
    },
    stopActivity() {
      var stoppedTime = (new Date()).toString();
      this.startedActivityTime = ""
      this.activityStarted = false;
      
      localStorage.startedActivityTime = this.startedActivityTime;
      localStorage.activityStarted = this.activityStarted;
    }
  },
  mounted() {
    if (localStorage.activityStarted && localStorage.startedActivityTime!="") {
      this.activityStarted = localStorage.activityStarted;
      this.startedActivityTime = localStorage.startedActivityTime;
    }
  },
  computed: {
    ...mapState({
      projects: state => state.projects
    })
  }
};
</script>

<style scoped>
.timerButtonDiv {
 text-align: center;
 padding:1em;
}
.recordActivityDiv {
  width:100%;
  margin: auto;
}
.recordActivityHeading{
  margin: auto;
  text-align: center;
}
</style>
