const { Schema, model } = require('mongoose');

const Joi = require('joi');

const joiSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().required(),
  homepage: Joi.link(),
  text: Joi.string().required(),
});

const commentsSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    homepage: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      default: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Comments = model('comment', commentsSchema);

module.exports = {
  Comments,
  joiSchema,
};
