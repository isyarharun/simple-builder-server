const FormController = require("./controllers/form/FormController");

module.exports = app => {
  app.get("/form/response/:id", FormController.getResponses);
  app.get("/form/:id", FormController.get);
  app.post("/form/save", FormController.saveBuilder);
  app.post("/form/submit", FormController.submitForm);
};
