const express = require("express");
const userController = require("../controllers/userController")
userRouter=express.Router();

userRouter.get("/",userController.getHome);
//round 1
userRouter.get("/game", userController.getGame);
userRouter.get("/gameRound1C2", userController.getGame2);
userRouter.get("/gameRound1C3", userController.getGame3);
userRouter.get("/gameRound1C4", userController.getGame4);
userRouter.get("/gameRound1C5", userController.getGame5);
userRouter.get("/gameRound1C6", userController.getGame6);
userRouter.get("/gameRound1C7", userController.getGame7);
userRouter.get("/gameRound1C8", userController.getGame8);
userRouter.get("/gameRound1C9", userController.getGame9);
userRouter.get("/gameRound1C10", userController.getGame10);

//round 2
userRouter.get("/gameRound2", userController.getGameRound2);

userRouter.get("/rules",userController.getRules)

module.exports = userRouter;