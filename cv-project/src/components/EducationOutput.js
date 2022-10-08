import React, { Component } from 'react'

export class EducationOutput extends Component {
  render() {
    return (
        <div>
        <p>Institution: {this.props.title}</p>
        <p>Major: {this.props.company}</p>
        <p>GPA: {this.props.gpa}</p>
        <button onClick={() => this.props.remove(this.props.educ)}>Delete</button>
      </div>
    )
  }
}

export default EducationOutput