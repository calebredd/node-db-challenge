const db = require("./db-config.js");
function findProjects() {
  return db("projects");
}
function findProjectById(id) {
  return db("projects").where({ id });
}
function findTasks(id) {
  return db("projects")
    .where({ "t.projectId": id })
    .join("tasks as t", "t.projectId", "projects.id")
    .select("*");
}
function findProjectResources(id) {
  return db("projects_resources")
    .where({ "p_r.projectId": id })
    .join("resources as r", "r.Id", "p_r.resourceId")
    .join("projects as p", "p.Id", "p_r.projectId")
    .select("*");
}
function findResources() {
  return db("resources");
}
function findResourceById(id) {
  return db("resources").where({ id });
}
function remove(id) {
  return db("projects")
    .where({ id })
    .del();
}
function insert(project) {
  return db("projects").insert(project);
}
function update(id, project) {
  return db("projects")
    .where({ id })
    .update(project);
}

module.exports = {
  findProjects,
  findProjectById,
  findTasks,
  findProjectResources,
  findResources,
  findResourceById,
  remove,
  insert,
  update
};
