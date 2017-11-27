const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const CategoryType = require('./category_type');
const OptionType = require('./option_type');
const Option = mongoose.model('option');
const Category = mongoose.model('category');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    categories: {
      type: new GraphQLList(CategoryType),
      resolve() {
        return Category.find({});
      }
    },
    category: {
      type: CategoryType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Category.findById(id);
      }
    },
    option: {
      type: OptionType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parnetValue, { id }) {
        return Option.findById(id);
      }
    }
  })
});

module.exports = RootQuery;
