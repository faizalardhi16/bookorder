import { Schema } from "mongoose";

export const Tutorial = (mongoose) => {
  var schema = mongoose.Schema(
    {
      title: String,
      description: String,
      published: Boolean,
      creator: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("tutorial", schema);
  return Tutorial;
};
