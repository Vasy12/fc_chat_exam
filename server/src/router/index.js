const router = require('express').Router();
const {saveProfilePicture} = require('./../middleware/multer.js');
const userController = require('../controllers/user.controller.js');
const checkAuth = require('../middleware/checkAuth.js');
const chatRouter = require('./chatRouter.js');
router.post('/sign_up',
            saveProfilePicture,
            (req, res, next) => {
              if (req.file) {
                req.body.profilePicture = req.file.filename;
              }
              next();
            },
            userController.signUpUser,
);
router.post('/login',
            userController.loginUser,
);

router.use(checkAuth);
router.use('/chats', chatRouter);
router.post('/refresh_auth', userController.refreshAuth);

module.exports = router;