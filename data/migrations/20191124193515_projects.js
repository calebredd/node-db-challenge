exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();
      tbl
        .text("projectName", 128)
        .notNullable()
        .unique();
      tbl.text("projectDescription", 128);
      tbl
        .boolean("completed")
        .notNullable()
        .defaultTo(false);
    })
    .createTable("resources", tbl => {
      tbl.increments();
      tbl
        .text("resourceName", 128)
        .notNullable()
        .unique();
      tbl.text("resourceDescription", 128);
    })
    .createTable("tasks", tbl => {
      tbl.increments();
      tbl
        .text("taskDescription", 128)
        .notNullable()
        .unique();
      tbl.text("taskNotes", 128);
      tbl
        .integer("projectId")
        .references("id")
        .inTable("projects")
        .notNullable();
      tbl
        .boolean("completed")
        .notNullable()
        .defaultTo(false);
    })
    .createTable("projects_resources", tbl => {
      tbl
        .integer("projectId")
        .references("id")
        .inTable("projects")
        .notNullable()
        .unsigned()
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("resourceId")
        .references("id")
        .inTable("resources")
        .notNullable()
        .unsigned()
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.primary(["projectId", "resourceId"]);
    });
};

exports.down = function(knex) {
  return knex.schema
    .deleteTableIfExists("projects_resources")
    .deleteTableIfExists("tasks")
    .deleteTableIfExists("resources")
    .deleteTableIfExists("projects");
};
