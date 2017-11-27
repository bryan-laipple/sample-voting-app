import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchCategories';

class CategoryList extends Component {
  render() {
    if (this.props.data.loading) {
      return <div>Loading categories...</div>;
    }

    return (
      <div>
        <h3>Categories</h3>
        <ul className="collection">
          {this.renderCategories()}
        </ul>
        <Link className="btn-floating btn-large red right" to="/categories/new">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }

  renderCategories() {
    return this.props.data.categories.map(({id, title}) => {
      return (
        <li className="collection-item" key={id}>
          <Link to={`/categories/${id}`}>{title}</Link>
          <i className="material-icons" onClick={() => this.onCategoryDelete(id)}>
            delete
          </i>
        </li>
      );
    });
  }

  onCategoryDelete(id) {
    const { mutate, data }  = this.props;
    mutate({variables: {id}})
      .then(() => data.refetch())
  }
}

const mutation = gql`
  mutation DeleteCategory($id: ID) {
    deleteCategory(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(
  graphql(query)(CategoryList)
);