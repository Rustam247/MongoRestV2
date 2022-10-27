require("./db/connection");

const express = require("express");
const userRouter = require("./user/userRouters");
const movieRouter = require("./movie/movieRouters");

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());

app.use(userRouter);
app.use(movieRouter);

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});