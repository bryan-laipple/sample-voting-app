const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} = graphql;
const Option = mongoose.model('option');

const OptionType = new GraphQLObjectType({
  name:  'OptionType',
  fields: () => ({
    id: { type: GraphQLID },
    likes: { type: GraphQLInt },
    content: { type: GraphQLString },
    category: {
      type: require('./category_type'),
      resolve(parentValue) {
        return Option.findById(parentValue).populate('category')
          .then(option => {
            console.log(option)
            return option.category
          });
      }
    }
  })
});

module.exports = OptionType;
