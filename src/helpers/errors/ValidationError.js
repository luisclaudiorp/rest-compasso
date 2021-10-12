class ValidationError extends Error {
  constructor(error, status) {
    super(error);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
    this.type = "Validadion Error";
    this.message = error.details[0].message;
    this.details = {
      path: error.details[0].path,
      type: error.details[0].type,
      context: error.details[0].context,
    };
    this.status = status || 500;
  }
}
module.exports = ValidationError;
