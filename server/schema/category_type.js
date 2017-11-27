const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;
const OptionType = require('./option_type');
const Category = mongoose.model('category');

const CategoryType = new GraphQLObjectType({
  name:  'CategoryType',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    options: {
      type: new GraphQLList(OptionType),
      resolve(parentValue) {
        return Category.findOptions(parentValue.id);
      }
    }
  })
});

module.exports = CategoryType;
