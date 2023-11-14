const express = require("express");

//routes Obj
const adminRouter = express.Router();

const controller = require("../controllers/adminController.js");

adminRouter.get("/", controller.adminHome);

adminRouter.get("/create", controller.adminCreate);

adminRouter.post("/create", controller.adminCreatePost);

adminRouter.get("/edit/:id", controller.adminEditGet); 

adminRouter.put("/edit/:id", controller.adminEditPut);

adminRouter.delete("/edit/:id",controller.adminDelete);

module.exports = adminRouter;
