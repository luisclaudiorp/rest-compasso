const clear = require("../../helpers/clear");
const regex = require("../../helpers/regex");

class Respository {
  constructor(schema) {
    this._schema = schema;
  }

  getAll(query, options) {
    clear(query);
    regex(query);
    return this._schema.paginate({ query }, options);
  }

  getOne(query) {
    return this._schema.findOne(query);
  }

  getById(_id) {
    return this._schema.findById(_id);
  }

  create({ ...data }) {
    return this._schema.create({ ...data });
  }

  update(_id, updateData) {
    return this._schema.findOneAndUpdate(_id, updateData, { new: true });
  }

  delete(_id) {
    return this._schema.findByIdAndRemove(_id);
  }
}

module.exports = Respository;
