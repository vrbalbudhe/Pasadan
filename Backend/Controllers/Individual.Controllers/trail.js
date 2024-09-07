const trial = async (req, res) => {
  console.log("varun");
  return res.status(200).json({
    success: true,
  });
};

module.exports = {
  trial,
};
