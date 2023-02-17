import { Schema } from "mongoose";
import { Tutorial } from "./tutorial.model";

export const User = (mongoose) => {
  var schema = mongoose.Schema(
    {
      username: String,
      name: String,
      email: Boolean,
      password: String,
      tutorial: [
        {
          type: Schema.Types.ObjectId,
          ref: "Tutorial",
        },
      ],
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const User = mongoose.model("user", schema);
  return User;
};
