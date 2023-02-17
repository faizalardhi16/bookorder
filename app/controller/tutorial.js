import response from "../dto/response.dto";
import db from "../models";
const Tutorial = db.tutorials;
import Joi from "joi";

const create = async (req, res) => {
  const { title, description, published } = req.body;

  const schema = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    description: Joi.string().min(3).required(),
    published: Joi.boolean(),
  });

  try {
    const { error, value } = schema.validate(req.body);
    const valid = error === null;

    if (!valid) {
      res.status(400).send(
        response({
          message: error.details[0].message,
          data: null,
          status: 400,
        })
      );

      return;
    }

    const tutorial = new Tutorial({
      title: title,
      description: description,
      published: published ? published : false,
    });

    await tutorial.save(tutorial);

    res.send(
      response({
        message: "Successfully created the data",
        status: 200,
        data: tutorial,
      })
    );
  } catch (error) {
    res.status(500).send(
      response({
        message: "Internal server error",
        status: 500,
        data: null,
      })
    );
  }
};

const update = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

const tutorialController = {
  create,
  update,
};

export default tutorialController;
