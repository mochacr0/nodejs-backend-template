import userRouter from "../routes/user.route.js";

const routes = (app) => {
  app.use("/user", userRouter);
};

export default routes;
