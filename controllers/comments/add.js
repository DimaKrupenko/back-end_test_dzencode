const { Comments } = require('../../models/index');

const add = async (req, res, next) => {
  try {
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
