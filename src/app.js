import express from "express";
import morgan from "morgan";
import cors from "cors";
import "dotenv/config";
import routes from "./routes/index.route.js";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();
app.use(cors());
app.use(morgan("dev"));

//api
routes(app);

//error handler
app.use(errorHandler);

const port = process.env.PORT || 7000;
app.listen(port, () => console.log(`Server is running at port ${port}`));
app.get("/", () => {
  console.log("Hello");
});
