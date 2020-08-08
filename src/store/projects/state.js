export default () => ({
  projects: [
    {
      project_id: 1,
      project_name: "Project 1",
      tasks: [
        {
          task_name: "p1_task1",
          start_time: "2020-07-10T08:48:00",
          stop_time: "2020-07-10T09:48:00",
          time_taken: 1,
        },
        {
          task_name: "p1_task2",
          start_time: "2020-07-10T08:48:00",
          stop_time: "2020-07-10T10:48:00",
          time_taken: 2
        },
        {
          task_name: "p1_task3",
          start_time: "2020-07-10T08:48:00",
          stop_time: "2020-07-10T11:48:00",
          time_taken: 3
        }
      ]
    },
    {
      project_id: 2,
      project_name: "Project 2",
      tasks: [
        {
          task_id: 1,
          task_name: "p2_task1",
          start_time: "2020-07-10T08:48:00",
          stop_time: "2020-07-10T09:48:00",
          time_taken: 1
        },
        {
          task_id: 2,
          task_name: "p2_task2",
          start_time: "2020-07-10T08:48:00",
          stop_time: "2020-07-10T10:48:00",
          time_taken: 2
        },
        {
          task_id: 3,
          task_name: "p2_task3",
          start_time: "2020-07-10T08:48:00",
          stop_time: "2020-07-10T11:48:00",
          time_taken: 3
        }
      ]
    }
  ]
});
