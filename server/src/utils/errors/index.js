class UserError extends Error{
  constructor (message, status) {
    super(message);
    this.name = this.constructor.name;
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = ( new Error(message) ).stack;
    }
    this._status = status;
  }

  get status () {
    return this._status;
  }

}

module.exports.BadRequestError = class extends UserError{
  constructor (message) {
    super(message || 'Bad request', 400);
  }
};

module.exports.NotFoundError = class extends UserError{
  constructor (message) {
    super(message || 'Resource not found', 404);
  }
};

module.exports.ForbiddenError = class extends UserError{
  constructor (message) {
    super(message ||
      'The server understood the request, but is refusing to fulfill it.', 403);
  }
};

module.exports.UnauthorizedError = class extends UserError{
  constructor (message) {
    super(message || 'The request requires user authentication.', 401);
  }
};
module.exports.UserError = UserError;

