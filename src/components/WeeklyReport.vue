<template>
  <div class="weeklyReportWrapper">
    <h4 style="margin-bottom:0">Last Week Tasks</h4>
    <h5 style="margin-bottom:0">
      Total hours spent in last 7 days: {{ weekTotalHrs.toFixed(2) }} Hours
    </h5>
    <div v-if="projects" class="reportDiv">
      {{ dateDiff() }}
      <div v-for="(project, index) in projects" :key="index" class="caption">
        <WeeklyReportItem :project="project" />
      </div>
    </div>
  </div>
</template>

<script>
import WeeklyReportItem from "../components/WeeklyReportItem";

export default {
  data() {
    return {
      weekTotalHrs: 0
    };
  },
  props: {
    projects: {
      type: Array,
      required: true
    }
  },
  components: {
    WeeklyReportItem
  },
  methods: {
    dateDiff() {
      var totalWeekTime = 0;
      var ourDate = new Date();

      //Change it so that it is 7 days in the past.
      var pastDate = ourDate.getDate() - 7;
      ourDate.setDate(pastDate);

      //Log the date to our web console.
      var weekDateLimit = ourDate;
      this.projects.forEach(project => {
        project.tasks.forEach(task => {

            //only take the project tasks of last 7 days and calculate total hours
          if (new Date(weekDateLimit) < new Date(task.start_time)) {
            const milliseconds = Math.abs(task.stop_time - task.start_time);
            const hours = milliseconds / 36e5;
            totalWeekTime += hours;
          }
        });
      });
      this.weekTotalHrs = totalWeekTime;
    }
  }
};
</script>

<style scoped>
.reportDiv {
  width: 90%;
  text-align: center;
  margin: auto;
}
.weeklyReportWrapper {
  width: 90%;
  margin: auto;
  border-radius: 20px;
  text-align: center;
  background: #ededed;
}

@media screen and (min-width: 850px) {
  .reportDiv {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
  }
}
</style>
