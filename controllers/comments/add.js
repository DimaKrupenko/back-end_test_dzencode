const { Comments } = require('../../models/index');
const { joiSchema } = require('../../models/comments');

const add = async (req, res, next) => {
  try {
    const { error } = joiSchema.validate(req.body);
    if (error) {
      const error = new Error('missing required field');
      error.status = 400;
      throw error;
    }
    const newComment = await Comments.create(req.body);
    res.status(201).json({
      status: 'success',
      code: 201,
      data: {
        newComment,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = add;
