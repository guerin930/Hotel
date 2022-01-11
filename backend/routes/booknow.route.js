const router = require('express').Router();
const BooknowController = require('../controllers/booknow.controller');

//submit booking
router.post("/booknow", BooknowController.saveBooknow);
router.get("/booknow", BooknowController.getAllBooking);
router.get("/booknow/:id", BooknowController.currentBooking);
router.put("/booknow/:id", BooknowController.UpdateBooking);
router.delete("/booknow/:id", BooknowController.DeleteBooking);

module.exports = router;