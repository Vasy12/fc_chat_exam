module.exports.PROFILE_PICTURE_PATH = `http://localhost:${ process.env.PORT ||
3000 }/profilePicture`;
module.exports.LOGIN_PATTERN = /^\w{6,16}$/;
module.exports.PASSWORD_PATTERN = /^(?=.*?[A-Z])(?=.*?\d)\w{6,16}$/;


