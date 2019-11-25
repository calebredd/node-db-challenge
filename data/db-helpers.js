const db = require("./db-config.js");

function findProjects() {
  return db("projects");
}
function findProjectById(id) {
  return db("projects").where({ id });
}
function findTasks(id) {
  return db("projects")
    .join("tasks as t", "t.projectId", "projects.id")
    .select("*")
    .where({ "t.projectId": id });
}
function findProjectResources(id) {
  return db("projects_resources as p_r")
    .where({ "p_r.projectId": id })
    .join("resources as r", "r.Id", "p_r.resourceId")
    .join("projects as p", "p.Id", "p_r.projectId")
    .select("p.projectName", "r.resourceName", "r.resourceDescription");
}
function findResources() {
  return db("resources");
}
function findResourceById(id) {
  return db("resources").where({ id });
}
function removeProject(id) {
  return db("projects")
    .where({ id })
    .del();
}
function insertProject(project) {
  return db("projects").insert(project);
}
function updateProject(id, project) {
  return db("projects")
    .where({ id })
    .update(project);
}
function removeTask(id) {
  return db("tasks")
    .where({ id })
    .del();
}
function insertTask(task) {
  return db("tasks").insert(task);
}
function updateTask(id, task) {
  return db("tasks")
    .where({ id })
    .update(task);
}
function removeResource(id) {
  return db("resources")
    .where({ id })
    .del();
}
function insertResource(resource) {
  return db("resources").insert(resource);
}
function updateResource(id, resource) {
  return db("resources")
    .where({ id })
    .update(resource);
}

module.exports = {
  findProjects,
  findProjectById,
  findTasks,
  findProjectResources,
  findResources,
  findResourceById,
  removeProject,
  insertProject,
  updateProject,
  removeTask,
  insertTask,
  updateTask,
  removeResource,
  insertResource,
  updateResource
};
