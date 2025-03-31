const express = require("express");
const userController = require("../controllers/userController")
userRouter=express.Router();

userRouter.get("/",userController.getHome);
//round 1
userRouter.get("/game", userController.getGame);
userRouter.get("/gameRound1C2-70e6f204-e56a-4152-a79d-85be53e9cc58", userController.getGame2);
userRouter.get("/gameRound1C3-404bb812-ef4b-43d4-b1c5-97dcaccdc159", userController.getGame3);
userRouter.get("/gameRound1C4-f8f6f03c-defc-41f9-8d33-36aea2591089", userController.getGame4);
userRouter.get("/gameRound1C5-84abcf18-ed66-44a4-800c-a66f6690df1a", userController.getGame5);
userRouter.get("/gameRound1C6-d05c1b80-bb4e-43d1-8c0c-e0da1d5868ea", userController.getGame6);
userRouter.get("/gameRound1C7-8ef4f355-b1b3-4dad-a096-784704fdcfe8", userController.getGame7);
userRouter.get("/gameRound1C8-289f4e4d-4c88-4d9c-9053-07eb5dbf792f", userController.getGame8);
userRouter.get("/gameRound1C9-2d40d4b6-c31b-4f66-bcc6-70a306589dea", userController.getGame9);
userRouter.get("/gameRound1C10-3f6c7e64-08c7-4279-bbf8-00b144fef3b3", userController.getGame10);

//round 2
userRouter.get("/gameRound2-244c7e5c-2614-4d51-8c50-79cad1202121", userController.getGameRound2);

userRouter.get("/rules",userController.getRules)

module.exports = userRouter;