const router = require("express").Router();
const api = require("./api");

router.get("/", async (req, res) => {
  const zoos = await api.getZoos();
  res.json(zoos);
});

router.post("/", async (req, res) => {
  const { name } = req.body;
  await api.createZoo(name);
  res.sendStatus(200);
});

module.exports = router;
