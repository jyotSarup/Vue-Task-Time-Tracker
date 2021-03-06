<template>
  <div class="recordActivityDiv">
    <h4 class="recordActivityHeading">Start New Task</h4>
    <div>
      <div v-if="!activityStarted" class="timerButtonDiv">
        <q-btn
          style="height:100px; width:250px"
          icon="timer"
          label="Start Timer"
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
          @click="projectPopUp = true"
        />
        <h6>Activity Started at : {{ startedActivityTime.toString() }}</h6>

        <q-dialog :value="projectPopUp">
          <q-card style="width: 300px">
            <q-card-section>
              <div class="text-h6">Update Task in Project</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <div class="q-pa-md" style="max-width: 400px">
                <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
                  <q-input
                    filled
                    v-model="taskName"
                    label="Your Task Name *"
                    lazy-rules
                    :rules="[
                      val => (val && val.length > 0) || 'Please type something'
                    ]"
                  ></q-input>

                  <q-select
                    v-if="projects"
                    v-model="projectSelected"
                    :options="projectsNames"
                    transition-show
                    lazy-rules
                    label="Select a project"
                    :rules="[
                      val =>
                        (val && val.length > 0) || 'Please select something'
                    ]"
                  ></q-select>

                  <div>
                    <q-btn label="Submit" type="submit" color="primary"></q-btn>
                    <q-btn
                      label="Reset"
                      type="reset"
                      color="primary"
                      flat
                      class="q-ml-sm"
                    ></q-btn>
                  </div>
                </q-form>
              </div>
            </q-card-section>
          </q-card>
        </q-dialog>
      </div>
    </div>
  </div> </template
>;

<script>
import { mapActions, mapState } from "vuex";
import store from "../store";
import projects from "src/store/projects";
import { SET_PROJECT_STATUS } from "src/constants";
const lodashClonedeep = require('lodash.clonedeep');

export default {
  data() {
    return {
      activityStarted: false,
      startedActivityTime: "",
      projectPopUp: false,
      taskName: null,
      projectSelected: "",
      projectsNames: []
    };
  },
  methods: {

    //starts when a new activity is started and saves time in local storage, even after refreshing the page, the activity is resumed
    startActivity() {

      //refresh both inputs
      this.taskName = "",
      this.projectSelected = "";

      //capture time of activity start
      this.startedActivityTime = new Date();

      //this flag helps to toggle button
      this.activityStarted = true;

      //store activity start time in local storage to retain it even after a refresh
      localStorage.startedActivityTime = this.startedActivityTime;
      localStorage.activityStarted = this.activityStarted;
    },

    // called when user stops the timer and sets project and task
    async stopActivity() {
      var stoppedTime = new Date();

      var saveTask = {
        task_name: this.taskName,
        start_time: this.startedActivityTime,
        stop_time: stoppedTime
      };

      var updatedProjects = lodashClonedeep(this.projects.projects);
      for (const [key, value] of Object.entries(updatedProjects)) {
        if (updatedProjects[key].project_name == this.projectSelected) {
          updatedProjects[key].tasks.push(saveTask);
        }
      }

      await this.$store.dispatch(SET_PROJECT_STATUS, updatedProjects).then(() => {});

      this.startedActivityTime = "";
      this.activityStarted = false;
      localStorage.startedActivityTime = this.startedActivityTime;
      localStorage.activityStarted = this.activityStarted;
    },
    onSubmit() {
      this.projectPopUp = false;
      this.stopActivity();
    },

    onReset() {
      this.name = null;
      this.age = null;
      this.accept = false;
    }
  },
  mounted() {
    if (
      localStorage.activityStarted &&
      localStorage.startedActivityTime != ""
    ) {
      this.activityStarted = localStorage.activityStarted;
      this.startedActivityTime = localStorage.startedActivityTime;
    }
  },
  created() {
    var projectDetail;
    for (let project of Object.keys(this.projects)) {
      projectDetail = this.projects[project];
    }

    this.projectsNames = projectDetail.map(x => x.project_name);
  },
  props: {
    projects: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.timerButtonDiv {
  text-align: center;
  padding: 1em;
}
.recordActivityDiv {
  height: 300px;
  width: 100%;
  margin: auto;
}
.recordActivityHeading {
  padding-top: 100px;
  margin: auto;
  text-align: center;
}
</style>
