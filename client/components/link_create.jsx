import React, { Component } from 'react';

class LinkCreate extends Component {
  handleSubmit(e) {
    e.preventDefault();
    Meteor.call('links.insert', this.refs.link.value);
  }
  render() {
    return(
      <div className="jumbotron jumbotron-fluid" style={{padding: '5% 20%'}}>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label>Link to shorten!</label>
            <input ref="link" className="form-control" placeholder="http://example.com/put-your-long-link-here"/>
          </div>
          <button className="btn btn-primary">Shorten!</button>
        </form>
      </div>
    )
  }
}

export default LinkCreate;
