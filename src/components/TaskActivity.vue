<template>
  <div>
    <h3>Task Activity</h3>
    <div class="recordActivityDiv">
        <q-btn class="timerButton" icon="timer" label="Start Activity" stack glossy color="green" />
        <q-btn class="timerButton" icon="timer_off" label="Stop Activity" stack glossy color="red" />
    </div>
  </div>
</template>;

<script>

export default {
  
}
</script>

<style scoped>
  .timerButton{
    margin: auto;
  }
  .recordActivityDiv{
    margin:auto;
  }
</style>