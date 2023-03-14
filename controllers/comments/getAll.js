const { Comments } = require('../../models/index');

const getAll = async (req, res, next) => {
  try {
    const comments = await Comments.find();
    res.json({
      status: 'success',
      code: 200,
      data: {
        result: comments,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
