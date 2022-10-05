import {Component} from 'react';

class Education extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       institution: '',
       major:'',
       gpa:''
    }
  }

  handleSubmit = (event) => {
		let institution = `${this.state.institution}`;
    let major = `${this.state.major}`;
    let gpa = `${this.state.gpa}`;
    
    let recap = document.getElementById('outputEducation');
    recap.innerHTML += `<div>
                        <p>Institution: ${institution} </p>
                        <p>Major: ${major} </p>
                        <p>Major: ${gpa} </p>
                        </div>`;
		event.preventDefault()
	}

  handleGPAChange = (event) =>{
    this.setState({
			gpa: event.target.value
		})
  }

  handleInstitutionChange = (event) =>{
    this.setState({
			institution: event.target.value
		})
  }

  handleMajorChange = (event) =>{
    this.setState({
			major: event.target.value
		})
  }


    render() {
        return (
        <div id='Education'>
          <form onSubmit={this.handleSubmit}>
            <div className='inputContainer'>
              <label>Institution:</label>
              <input type={'text'} value={this.state.institution} onChange={this.handleInstitutionChange}></input>
            </div>
            <div className='inputContainer'>
            <label>Major:</label>
            <input type={'text'} value={this.state.major} onChange={this.handleMajorChange}></input>
            </div>
            <div className='inputContainer'>
              <label>Gpa:</label>
              <input type={'text'} value={this.state.gpa} onChange={this.handleGPAChange}></input>
            </div>
            <div className='inputContainer'>
              <button>Add Education</button>
            </div>
          </form>

          <div id='outputEducation'>
          </div>
          

        </div>
        )
      }
}

export {Education};