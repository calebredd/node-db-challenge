exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        {
          resourceName: "First Resource",
          resourceDescription: "Unnecessary"
        },
        {
          resourceName: "Second Resource",
          resourceDescription: "Unnecessary"
        },
        {
          resourceName: "Third Resource",
          resourceDescription: "Unnecessary"
        }
      ]);
    });
};
