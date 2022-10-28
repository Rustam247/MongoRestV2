const { Router } = require("express")
const {createMovie, readMovie, updateMovie, deleteMovie, readMovieOne} = require("./movieController")

const movieRouter = Router();

movieRouter.get("/readMovie", readMovie);
movieRouter.post("/createMovie", createMovie);
movieRouter.put("/updateMovie", updateMovie);
movieRouter.delete("/deleteMovie", deleteMovie);
// movieRouter.get("/readMovieOne", readMovieOne);
movieRouter.get("/readMovieOne/:username", readMovieOne);


module.exports = movieRouter;
