const db = require("./db-config.js");
function find() {
  return db("projects");
}
function findById() {
  return db("projects");
}
function remove() {
  return db("projects");
}
function insert() {
  return db("projects");
}
function update() {
  return db("projects");
}

module.exports = { find, findById, remove, insert, update };
