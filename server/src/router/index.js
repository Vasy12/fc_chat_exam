const router = require('express').Router();
const { saveProfilePicture } = require('./../middleware/multer.js');
const userController = require('../controllers/user.controller.js');
const checkAuth = require('../middleware/checkAuth.js');
router.post('/sign_up',
  saveProfilePicture,
  (req, res, next) => {
    req.body.profilePicture = req.file.filename;
    next();
  },
  userController.signUpUser,
);
router.post('/login',
  userController.loginUser,
);

router.use(checkAuth);

module.exports = router;