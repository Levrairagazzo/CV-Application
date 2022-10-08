import React, { Component } from 'react'

export class ExperienceOutput extends Component {
    constructor(props) {
      super(props)
    }
  render() {
    return (
      <div>
        <p>Title: {this.props.title}</p>
        <p>Company: {this.props.company}</p>
        <button onClick={() => this.props.remove(this.props.exp)}>Delete</button>
      </div>
    )
  }
}

export default ExperienceOutput