exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          taskDescription:
            "I am required for tasks. Task should be set to true manually by seed file.",
          taskNotes: "Not needed",
          projectId: 1,
          completed: true
        },
        {
          taskDescription:
            "I am required for tasks. Task should be set to false manually by seed file.",
          taskNotes: "Not needed",
          projectId: 1,
          completed: false
        },
        {
          taskDescription:
            "I am required for tasks. Task should be set to false automatically by default",
          taskNotes: "Not needed",
          projectId: 1,
          completed: false
        },
        {
          taskDescription:
            "I am required for tasks. Task should be set to true manually by seed file.",
          taskNotes: "Not needed",
          projectId: 2,
          completed: true
        },
        {
          taskDescription:
            "I am required for tasks. Task should be set to false manually by seed file.",
          taskNotes: "Not needed",
          projectId: 2,
          completed: false
        },
        {
          taskDescription:
            "I am required for tasks. Task should be set to false automatically by default",
          taskNotes: "Not needed",
          projectId: 2,
          completed: false
        },
        {
          taskDescription:
            "I am required for tasks. Task should be set to true manually by seed file.",
          taskNotes: "Not needed",
          projectId: 3,
          completed: true
        },
        {
          taskDescription:
            "I am required for tasks. Task should be set to false manually by seed file.",
          taskNotes: "Not needed",
          projectId: 3,
          completed: false
        },
        {
          taskDescription:
            "I am required for tasks. Task should be set to false automatically by default",
          taskNotes: "Not needed",
          projectId: 3,
          completed: false
        }
      ]);
    });
};
