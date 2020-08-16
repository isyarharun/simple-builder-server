const FormService = require("../../../services/form");
module.exports = {
  async saveBuilder(req, res) {
    try {
      const params = req.body;
      const result = await FormService.saveForm(params);
      res.send({ id: result.insertedId });
    } catch (err) {
      console.error(err);
    }
  },
  async get(req, res) {
    try {
      const id = req.params.id;
      const result = await FormService.get(id);
      res.send(result);
    } catch (err) {
      console.error(err);
    }
  },
  async submitForm(req, res) {
    try {
      const params = req.body;
      const result = await FormService.submitForm(params);
      res.send(result);
    } catch (err) {
      console.error(err);
    }
  },
  async getResponses(req, res) {
    try {
      const id = req.params.id;
      const result = await FormService.getResponses(id);
      res.send(result);
    } catch (err) {
      console.error(err);
    }
  }
};
