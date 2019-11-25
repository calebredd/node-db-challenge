exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          projectName: "First Project: True",
          projectDescription: "Unnecessary",
          completed: true
        },
        {
          projectName: "Second Project: False",
          projectDescription: "Unnecessary",
          completed: false
        },
        {
          projectName: "Third Project: False as well",
          projectDescription: "Unnecessary",
          completed: false
        }
      ]);
    });
};
