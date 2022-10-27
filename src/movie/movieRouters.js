const { Router } = require("express")
const {createMovie, readMovie, updateMovie, deleteMovie} = require("./movieController")

const movieRouter = Router();

movieRouter.get("/readMovie", readMovie);
movieRouter.post("/createMovie", createMovie);
movieRouter.put("/updateMovie", updateMovie);
movieRouter.delete("/deleteMovie", deleteMovie);

module.exports = movieRouter;
