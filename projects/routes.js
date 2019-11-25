const express = require("express"),
  db = require("../data/db-helpers"),
  router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to the Projects Backend Server");
});
router.get("/api", (req, res) => {
  res.send("Welcome to the Projects API");
});
router.get("/api/projects", (req, res) => {
  db.findProjects()
    .then(projects => {
      projects.map(project => {
        project.completed = project.completed == true;
      });
      res.status(200).json(projects);
    })
    .catch(() => {
      res.status(500).json({ errorMessage: "Unable to access database" });
    });
});
router.get("/api/projects/:id", (req, res) => {
  db.findProjectById(req.params.id)
    .then(project => {
      project.map(project => {
        project.completed = project.completed == true;
      });
      res.status(200).json(project);
    })
    .catch(() => {
      res.status(500).json({ errorMessage: "Unable to locate project" });
    });
});
router.get("/api/projects/:id/details", (req, res) => {
  db.findProjectById(req.params.id)
    .then(project => {
      project.map(project => {
        project.completed = project.completed == true;
        project.tasks = [];
        project.resources = [];
        db.findTasks(req.params.id)
          .then(tasks => {
            tasks.map(task => {
              task.completed = task.completed == true;
              project.tasks.push(task);
            });
          })
          .catch(() => {
            res
              .status(500)
              .json({ errorMessage: "Unable to locate project tasks" });
          });
        db.findProjectResources(req.params.id)
          .then(resources => {
            resources.map(resource => {
              project.resources.push(resource);
            });
          })
          .catch(() => {
            res
              .status(500)
              .json({ errorMessage: "Unable to locate project resources" });
          });
      });
      res.status(200).json(project);
    })
    .catch(() => {
      res.status(500).json({ errorMessage: "Unable to locate project" });
    });
});
router.get("/api/projects/:id/tasks", (req, res) => {
  db.findTasks(req.params.id)
    .then(tasks => {
      tasks.map(task => {
        task.completed = task.completed == true;
      });
      res.status(200).json(tasks);
    })
    .catch(() => {
      res.status(500).json({ errorMessage: "Unable to locate project" });
    });
});
router.get("/api/projects/:id/resources", (req, res) => {
  db.findProjectResources(req.params.id)
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(() => {
      res.status(500).json({ errorMessage: "Unable to locate project" });
    });
});
router.get("/api/resources", (req, res) => {
  db.findResources()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(() => {
      res.status(500).json({ errorMessage: "Unable to access database" });
    });
});
router.get("/api/resources/:id", (req, res) => {
  db.findResourceById(req.params.id)
    .then(resource => {
      res.status(200).json(resource);
    })
    .catch(() => {
      res.status(500).json({ errorMessage: "Unable to locate project" });
    });
});

router.post("/api/projects", (req, res) => {
  const project = req.body;
  db.insertProject(project)
    .then(() => {
      res.status(202);
      db.findProjects()
        .then(projects => {
          projects.map(project => {
            project.completed = project.completed == true;
          });
          res.status(200).json(projects);
        })
        .catch(() => {
          res.status(500).json({ errorMessage: "Unable to access database" });
        });
    })
    .catch(() => {
      res.status(500).json({ errorMessage: "Unable to add project" });
    });
});
router.post("/api/projects/:id/tasks", (req, res) => {
  const task = req.body;
  task.projectId = req.params.id;
  db.insertTask(task)
    .then(() => {
      res.status(202);
      db.findTasks(req.params.id)
        .then(tasks => {
          tasks.map(task => {
            task.completed = task.completed == true;
          });
          res.status(200).json(tasks);
        })
        .catch(() => {
          res.status(500).json({ errorMessage: "Unable to locate project" });
        });
    })
    .catch(() => {
      res.status(500).json({ errorMessage: "Unable to add task" });
    });
});
router.post("/api/resources", (req, res) => {
  const resource = req.body;
  db.insertResource(resource)
    .then(() => {
      res.status(202);
      db.findResources()
        .then(resources => {
          res.status(200).json(resources);
        })
        .catch(() => {
          res.status(500).json({ errorMessage: "Unable to access database" });
        });
    })
    .catch(() => {
      res.status(500).json({ errorMessage: "Unable to add resource" });
    });
});

module.exports = router;
