const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const {PROFILE_PICTURE_PATH, LOGIN_PATTERN} = require('../constants');
const Schema = mongoose.Schema;

const userSchema = new Schema({

                                login: {
                                  type: Schema.Types.String,
                                  required: true,
                                  unique: true,
                                  match: LOGIN_PATTERN,
                                },
                                password: {
                                  type: Schema.Types.String,
                                  required: true,
                                  /*
                                   select: false,
                                   */
                                },
                                profilePicture: {
                                  type: Schema.Types.String,
                                  get: value => value
                                    ? `${PROFILE_PICTURE_PATH}/${value}`
                                    : null,
                                },
                              }, {
                                timestamps: true,
                              });

userSchema.pre('save', function hashPassword (next) {

  if (this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, 10);
  }
  next();
});

/*
 * add "comparePassword" method
 * */
/*userSchema.methods.comparePassword = function (plainPassword) {
 return bcrypt.compare(plainPassword, this.password, 10);
 };*/
userSchema.method('comparePassword', function (plainPassword) {
  return bcrypt.compare(plainPassword, this.password);
});

userSchema.set('toObject', {getters: true});
userSchema.set('toJSON', {getters: true});

const User = mongoose.model('User', userSchema);

module.exports = User;
