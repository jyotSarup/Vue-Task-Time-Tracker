export default () => ({
  projects: [
    {
      project_id: 1,
      project_name: "Project 1",
      tasks: [
        {
          task_name: "p1_task1",
          start_time: new Date(2020, 7, 1, 5, 23, 59),
          stop_time: new Date(2020, 7, 1, 8, 23, 59),
          time_taken: 1,
        },
        {
          task_name: "p1_task2",
          start_time:new Date(2020, 6, 30, 5, 23, 59),
          stop_time: new Date(2020, 6, 30, 8, 23, 59),
          time_taken: 2
        },
        {
          task_name: "p1_task3",
          start_time: new Date(2020, 7, 31, 5, 23, 59),
          stop_time: new Date(2020, 7, 31, 8, 23, 59),
          time_taken: 3
        },
        {
          task_name: "p1_task4",
          start_time: new Date(2020, 7, 3, 5, 23, 59),
          stop_time: new Date(2020, 7, 3, 8, 23, 59),
          time_taken: 1,
        },
      ]
    },
    {
      project_id: 2,
      project_name: "Project 2",
      tasks: [
        {
          task_id: 1,
          task_name: "p2_task1",
          start_time: new Date(2020, 7, 3, 5, 23, 59),
          stop_time: new Date(2020, 7, 3, 8, 23, 59),
          time_taken: 1
        },
        {
          task_id: 2,
          task_name: "p2_task2",
          start_time: new Date(2020, 5, 31, 5, 23, 59),
          stop_time: new Date(2020, 5, 31, 8, 23, 59),
          time_taken: 2
        },
        {
          task_id: 3,
          task_name: "p2_task3",
          start_time: new Date(2020, 7, 31, 5, 23, 59),
          stop_time: new Date(2020, 7, 31, 8, 23, 59),
          time_taken: 3
        }
      ]
    }
  ]
});
