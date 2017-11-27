import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class OptionCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { content: '' };
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.mutate({
      variables: {
        content: this.state.content,
        categoryId: this.props.categoryId
      }
    });

    this.setState({ content: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Add a Option</label>
          <input value={this.state.content}
                 onChange={event => this.setState({ content: event.target.value })}/>
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddOption($content: String, $categoryId: ID) {
    addOptionToCategory(content: $content, categoryId: $categoryId) {
      id
      options {
        id
        content
        likes
      }
    }
  }
`;

export default graphql(mutation)(OptionCreate);
