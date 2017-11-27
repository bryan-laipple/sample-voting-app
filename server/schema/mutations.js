const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const mongoose = require('mongoose');
const Category = mongoose.model('category');
const Option = mongoose.model('option');
const CategoryType = require('./category_type');
const OptionType = require('./option_type');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addCategory: {
      type: CategoryType,
      args: {
        title: { type: GraphQLString }
      },
      resolve(parentValue, { title }) {
        return (new Category({ title })).save()
      }
    },
    addOptionToCategory: {
      type: CategoryType,
      args: {
        content: { type: GraphQLString },
        categoryId: { type: GraphQLID }
      },
      resolve(parentValue, { content, categoryId }) {
        return Category.addOption(categoryId, content);
      }
    },
    likeOption: {
      type: OptionType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Option.like(id);
      }
    },
    deleteCategory: {
      type: CategoryType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Category.remove({ _id: id });
      }
    }
  }
});

module.exports = mutation;
