import response from "../dto/response.dto";
import db from "../models";
import Joi from "joi";

const User = db.users;

const createUser = async (req, res) => {
  try {
    const formRegisterSchema = Joi.object().keys({
      name: Joi.string().min(3).max(100).required(),
      username: Joi.string()
        .alphanum()
        .min(3)
        .max(100)
        .message("Invalid email")
        .required(),
      email: Joi.string().email().min(8).max(100).required(),
      password: Joi.string().alphanum().min(8).required(),
    });
    const result = Joi.validate(req.body, formRegisterSchema);

    const { value, error } = result;

    const valid = error === null;

    if (!valid) {
      res.send(
        response({
          message: "Invalid Request",
          status: 422,
          data: body,
        })
      );
    }

    const user = new User({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    await user.save(user);

    res.send(
      response({
        message: "Register User has been successfully",
        status: 200,
        data: req.body,
      })
    );
  } catch (error) {
    res.send(
      response({
        data: null,
        message: "Internal server error",
        status: 500,
      })
    );
  }
};
