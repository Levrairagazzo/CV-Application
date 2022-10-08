import React, { Component } from 'react'
import ExperienceOutput from './ExperienceOutput'
import shortid from "shortid";

export class Experience extends Component {
  constructor(props) {
    super(props)
    
  
    this.state = {
       title: '',
       company: '',
       experiences :[]
    }

  }

  handleSubmit = (event) => {
		let jobTitle = `${this.state.title}`;
    let companyName = `${this.state.company}`;
    let copyarr = this.state.experiences;
    let newId = shortid.generate();
    copyarr.push({ id: newId,
                              title: jobTitle,
                              company:companyName});
    console.log(copyarr)
    
    this.setState(prev => ({
      exeperiences: copyarr
    }));
      
                    
		event.preventDefault()
	}

  test = (event) => {
    console.log("This is a test");
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

  onRemoveExperience = item => {
    let copyArr = this.state.experiences;
    console.log(copyArr)
    let result = copyArr.filter((element) => element.id !== item.id);
    this.setState({
      experiences: result
    })
  };



  
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
      <button type='submit' >Add Experience</button>
      </div>
      </form>
      <div id='outputExperience'>
        {
          this.state.experiences.map(experience => (<ExperienceOutput 
            title={experience.title}
            company={experience.company}
            key={experience.id}
            remove={this.onRemoveExperience}
            exp = {experience}
            />))
        }
        
      </div>
      
    </div>
    )
      }
}

export default Experience