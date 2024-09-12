const asyncHandler = require("express-async-handler");
const prisma = require("../../lib/prisma");
const Joi = require("Joi");

const schema = Joi.object({
  title: Joi.string().required().min(5),
  subtitle: Joi.string().required(),
  description: Joi.string().required(),
  location: Joi.string().required(),
  dtype: Joi.string().required(),
});

const createCommentPost = asyncHandler(async (req, res) => {
  const { error } = schema.validate(req.body);
  if (error) {
    console.log(error);
    return res.status(400).json({
      message: error.details[0].message,
      success: false,
    });
  }

  try {
    const { title, subtitle, location, description, dtype, timeperiod } =
      req.body;

    const newComment = await prisma.comment.create({
      data: {
        title,
        subtitle,
        location,
        description,
        dtype,
        timeperiod,
      },
    });

    if (!newComment) {
      return res.status(401).json({
        message: "Error While Creating New Comment",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Comment Created Successfully",
      success: true,
      data: newComment,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error In CreateCommentPost Handler",
      success: false,
      error: error.message,
    });
  }
});

module.exports = {
  createCommentPost,
};
