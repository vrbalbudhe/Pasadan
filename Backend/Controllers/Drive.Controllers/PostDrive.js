const asyncHandler = require("express-async-handler");
const prisma = require("../../lib/prisma");
const Joi = require("Joi");

const schema = Joi.object({
  title: Joi.string().required().min(5),
  location: Joi.string().required(),
  description: Joi.string().required(),
  status: Joi.string().required(),
  dtype: Joi.string().required(),
  timeperiod: Joi.string().required(),
});

const createDrivePost = asyncHandler(async (req, res) => {
  const { error } = schema.validate(req.body);
  if (error) {
    console.log(error);
    return res.status(400).json({
      message: error.details[0].message,
      success: false,
    });
  }

  try {
    const { title, location, description, status, dtype, timeperiod } = req.body;
    
    const newDrive = await prisma.drive.create({
      data: {
        title,
        location,
        description,
        status,
        dtype,
        timeperiod,
      },
    });

    if (!newDrive) {
      return res.status(401).json({
        message: "Error While Creating New Drive",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Drive Created Successfully",
      success: true,
      data: newDrive,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error In CreateDrivePost Handler",
      success: false,
      error: error.message, 
    });
  }
});

module.exports = {
  createDrivePost,
};
