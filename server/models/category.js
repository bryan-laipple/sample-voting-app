const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  title: { type: String },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  options: [{
    type: Schema.Types.ObjectId,
    ref: 'option'
  }]
});

CategorySchema.statics.addOption = function(id, content) {
  const Option = mongoose.model('option');

  return this.findById(id)
    .then(category => {
      const option = new Option({ content, category })
      category.options.push(option)
      return Promise.all([option.save(), category.save()])
        .then(([option, category]) => category);
    });
}

CategorySchema.statics.findOptions = function(id) {
  return this.findById(id)
    .populate('options')
    .then(category => category.options);
}

mongoose.model('category', CategorySchema);
