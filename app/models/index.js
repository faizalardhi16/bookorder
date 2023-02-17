import { config } from "../config/db.config.js";
import mongoose from "mongoose";
import { Tutorial } from "./tutorial.model.js";
import { User } from "./user.model.js";
mongoose.Promise = global.Promise;
mongoose.set("strictQuery", true);

const db = {};
db.mongoose = mongoose;
db.url = config.url;
db.tutorials = Tutorial(mongoose);
db.users = User(mongoose);

export default db;
