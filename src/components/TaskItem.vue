<template>
  <div class="task">
    <q-list bordered >
      <q-item clickable v-ripple>
        <q-item-section overline><strong>{{task.task_name}}</strong></q-item-section>
      </q-item>

      <q-item>
        <q-item-section>
          <q-item-label>Start Time</q-item-label>
          <q-item-label caption style="color:white">{{task.start_time}}</q-item-label>
        </q-item-section>
      </q-item>

     <q-item>
        <q-item-section>
          <q-item-label>Stop Time</q-item-label>
          <q-item-label caption style="color:white">{{task.stop_time}}</q-item-label>
        </q-item-section>
      </q-item>
      
    </q-list>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  created() {
    console.log("single task", this.task);
  }
};
</script>

<style scoped>
.task {
    margin:1em;
    background: #1976D2;
    color: white;
}

</style>
