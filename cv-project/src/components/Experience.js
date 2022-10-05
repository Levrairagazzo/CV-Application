import React, { Component } from 'react'

export class Experience extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       title: '',
       company: ''
    }
  }

  handleSubmit = (event) => {
		let title = `${this.state.title}`;
    let company = `${this.state.company}`;
    
    let recap = document.getElementById('outputExperience');
    recap.innerHTML += ` <div>
                        <p>Title: ${title} </p>
                        <p>Company: ${company} </p>
                        </div>`;
		event.preventDefault()
	}

  handleTitleChange = event => {
		this.setState({
			title: event.target.value
		})
	}
  handleCompanyChange = event => {
		this.setState({
			company: event.target.value
		})
	}

  
  render() {
    return (
    <div id='Experience'>
      <form onSubmit={this.handleSubmit}>
      <div className='inputContainer'>
        <label>Title:</label>
        <input type='text' value={this.state.title} onChange={this.handleTitleChange}></input>
      </div>
      <div className='inputContainer'>
      <label>Company:</label>
      <input type='text'  value={this.state.company} onChange={this.handleCompanyChange}></input>
      </div>
      <div >
      <button type='submit'>Add Experience</button>
      </div>
      </form>
      <div id='outputExperience'>
        
      </div>
      
    </div>
    )
  }
}

export default Experience