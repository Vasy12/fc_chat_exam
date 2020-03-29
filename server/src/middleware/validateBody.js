module.exports = validationSchema => async (req, res, next) => {
  try {

    req.body = validationSchema.validate(req.body);

    next();

  } catch (e) {
    next(e);
  }
};
