const { Router } = require("express");
const {createUser, readUser, deleteUser, updateUser, loginUser} = require ("./userControllers");
const { hashPass, tokenCheck, comparePass }= require("../middleware/index");

const userRouter = Router();

userRouter.get("/readUser", readUser);
userRouter.post("/createUser", hashPass, createUser);
userRouter.put("/updateUser", updateUser);
userRouter.delete("/deleteUser/:username", deleteUser);

userRouter.post("/loginUser", comparePass, loginUser);
userRouter.get("/loginUser", tokenCheck, loginUser);

module.exports = userRouter;