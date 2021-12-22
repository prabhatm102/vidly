const {
  getMovie,
  getMovies,
  setMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/movie");
const { validate } = require("../validations/movie");
const express = require("express");
const { allowCrossDomain } = require("../middleware/allowCrossDomain");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const validateObjectId = require("../middleware/validateObjectId");
const router = express.Router();

router.get("/", [getMovies]);

router.get("/:id", [validateObjectId, getMovie]);

router.post("/", [auth, validate, setMovie]);

router.put("/:id", [auth, validate, updateMovie]);

router.delete("/:id", [auth, admin, deleteMovie]);

module.exports = router;
