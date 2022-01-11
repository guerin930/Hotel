const router = require('express').Router();
const TestController = require('../controllers/test.controller')

router.post("/test", TestController.saveTest);
router.get("/test", TestController.getAllTest);

module.exports = router;