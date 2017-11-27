const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OptionSchema = new Schema({
  category: {
    type: Schema.Types.ObjectId,
    ref: 'category'
  },
  likes: { type: Number, default: 0 },
  content: { type: String }
});

OptionSchema.statics.like = function(id) {
  const Option = mongoose.model('option');

  return Option.findById(id)
    .then(option => {
      ++option.likes;
      return option.save();
    })
}

mongoose.model('option', OptionSchema);
