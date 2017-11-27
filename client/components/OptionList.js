import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';

class OptionList extends Component {
  render() {
    return (
      <ul className="collection">
        {this.renderOptions()}
      </ul>
    )
  }

  renderOptions() {
    return this.props.options.map(({id, content, likes}) => {
      return (
        <li className="collection-item" key={id}>
          {content}
          <div className="vote-box">
            <i className="material-icons" onClick={() => this.onOptionLike(id, likes)}>
              thumb_up
            </i>
            {likes}
          </div>
        </li>
      )
    })
  }

  onOptionLike(id, likes) {
    this.props.mutate({
      variables: { id },
      optimisticResponse: {
        __typename: 'Mutation',
        likeOption: {
          id,
          __typename: 'OptionType',
          likes: likes + 1
        }
      }
    })
  }
}

const mutation = gql`
  mutation LikeOption($id: ID) {
    likeOption(id: $id) {
      id
      likes
    }
  }
`;

export default graphql(mutation)(OptionList);
