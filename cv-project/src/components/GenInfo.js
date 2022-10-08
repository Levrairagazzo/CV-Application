import { differenceInBusinessDays } from 'date-fns'
import React, { Component } from 'react'

export class genInfo extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      visible: true,
       firstName: '',
       lastName: '',
       email: '',
       location: ''
    
    }
  }

  handleFirstNameChange = event => {
		this.setState({
			firstName: event.target.value
		})
	}

  handleLastNameChange = event => {
		this.setState({
			lastName: event.target.value
		})
	}

  handleEmailChange = event => {
		this.setState({
			email: event.target.value
		})
	}
  
  handleLocationChange = event => {
		this.setState({
			location: event.target.value
		})
	}

  handleSubmit = (event) => {
    this.handleVisibility(event);
		let firstName = `${this.state.firstName}`;
    let lastName = `${this.state.lastName}`;
    let email = `${this.state.email}`;
    let location = `${this.state.location}`;
   let recap = document.getElementById('output');
    recap.innerHTML = `<div>
                      <p>First name: ${firstName} </p>
                      <p> Last name: ${lastName} </p>
                      <p> Email: ${email} </p>
                      <p> Location: ${location} </p>
                      </div>`;
		event.preventDefault()
	}

  handleVisibility = event => {
    let updateVisible = true;
    if(this.state.visible)updateVisible = false;

    this.setState({
		visible: updateVisible
		})
  } 



  render() {
    return (
      <div id='generalInfoWrapper'>
        {this.state.visible ? null: <button onClick={this.handleVisibility}>Change info</button>}
        {this.state.visible ?
        <form onSubmit={this.handleSubmit}>
            <div className='newInput'>
                <div className='inputContainer'>
                  <label>First Name: </label>
                  <input type="text" placeholder='Jean' value={this.state.firstName} id='first-name' className='input' onChange={this.handleFirstNameChange}></input>
                </div>
               <div className='inputContainer'>
                  <label>Last Name: </label>
                  <input type="text" placeholder='Mouloud' value={this.state.lastName} id='first-name' onChange={this.handleLastNameChange}></input>
               </div>
                <div className='inputContainer'>
                  <label> E-Mail: </label>
                  <input type="email" placeholder='jeanmouloud@something.com' id="email" name="email"  value={this.state.email} onChange={this.handleEmailChange}></input>
                </div>
                <div className='inputContainer'>
                  <label>Location:</label>
                  <input type="text" placeholder='Fresno, CA' value={this.state.location} id='location' onChange={this.handleLocationChange}></input>
                </div>
                <button type="submit" >Save changes</button>
            </div>
        </form>
        : null}

        <div id='output'>
       <p>First name: </p>
       <p>Last name: </p>
       <p>Email: </p>
       <p>Location:  </p>
        </div>
        </div>
    )
  }
}

export default genInfo