class ValidationError extends Error {
  constructor(error, status) {
    super(error);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
    this.type = "Validadion Error";
    for (let key of Object.keys(error.details)) {
      this.message = error.details[key].message;
      this.details = {
        path: error.details[key].path,
        type: error.details[key].type,
        context: error.details[key].context,
      };
    }
    this.status = status || 500;
  }
}
module.exports = ValidationError;
