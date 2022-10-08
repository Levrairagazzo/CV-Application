import {Component} from 'react';
import shortid from 'shortid';
import EducationOutput from './EducationOutput'
import Experience from './Experience';

class Education extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       institution: '',
       major:'',
       gpa:'',
       educations: []
    }
  }

  handleSubmit = (event) => {
		let newInstitution = `${this.state.institution}`;
    let newMajor = `${this.state.major}`;
    let newGpa = `${this.state.gpa}`;
    let copyarr = this.state.educations;
    let newId = shortid.generate();

    copyarr.push({id:newId,
      institution:newInstitution,
      major:newMajor,
      gpa:newGpa

    })
    this.setState(prev => ({
      exeperiences: copyarr
    }));
   
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

  onRemoveEducation = item => {
    console.log(result)
    let copyArr = this.state.educations;
    let result = copyArr.filter((element) => element.id !== item.id);
    this.setState({
      education: result
    })
  };


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
            {
              this.state.educations.map(education => (<EducationOutput
              institution={education.institution}
              major={education.major}
              gpa={education.gpa}
              remove={this.onRemoveEducation}
              educ = {education}
              key = {education.id}
              />))
            }
          </div>
          

        </div>
        )
      }
}

export {Education};

