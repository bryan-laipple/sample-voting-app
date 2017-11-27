import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import fetchCategory from '../queries/fetchCategory';
import OptionCreate from './OptionCreate';
import OptionList from './OptionList';

class CategoryDetail extends Component {
  render() {
    const { category } = this.props.data;

    if (!category) { return <div></div>; }

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{category.title}</h3>
        <OptionList options={category.options} />
        <OptionCreate categoryId={category.id} />
      </div>
    )
  }
}

export default graphql(fetchCategory, {
  options: ({params}) => ({variables: {id: params.id}})
})(CategoryDetail);
