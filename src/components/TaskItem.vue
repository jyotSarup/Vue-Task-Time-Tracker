<template>
<!--shows tasks of last 7 days only-->
  <div class="task" v-if="new Date(weekDateLimit) < new Date(task.start_time)">
    <q-list bordered>
      <q-item clickable v-ripple>
        <q-item-section overline
          ><strong>Task: {{ task.task_name }}</strong></q-item-section
        >
      </q-item>

      <q-item>
        <q-item-section>
          <q-item-label>Start Time</q-item-label>
          <q-item-label caption style="color:white">
            {{ task.start_time.toString().substring(0, 25) }}</q-item-label
          >
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section>
          <q-item-label>Stop Time</q-item-label>
          <q-item-label caption style="color:white">{{
            task.stop_time.toString().substring(0, 25)
          }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weekDateLimit: ""
    };
  },
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  created() {
    var ourDate = new Date();

    //Change it so that it is 7 days in the past.
    var pastDate = ourDate.getDate() - 7;
    ourDate.setDate(pastDate);

    //Log the date to our web console.
    this.weekDateLimit = ourDate;
  }
};
</script>

<style scoped>
.task {
  margin: 1em;
  background: #1976d2;
  color: white;
}
</style>
