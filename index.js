import express from "express";
import cors from "cors";
import db from "./app/models/index.js";
import { tutorialRoutes } from "./app/routes/tutorial.routes.js";

const app = express();

const corsOption = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOption));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({ message: "Hello world!" });
});

const PORT = process.env.PORT || 8080;

tutorialRoutes(app);

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
