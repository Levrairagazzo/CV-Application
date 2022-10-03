import React, { Component } from 'react'

export class genInfo extends Component {
  render() {
    return (
        <div>
            <div style={{
        display: 'flex',
        flexDirection:'column',
        width: '20vw',
                    }}>
                <label>First Name: </label>
                <input type="text" value="John"></input>
                <label>Last Name: </label>
                <input type="text" value="Doe"></input>
                <label> E-Mail: </label>
                <input type="email" id="email" name="email" value={'youremail@whatever.com'}></input>
                <label>Location:</label>
                <input type="text" value="Location"></input>
            </div>

        </div>
    )
  }
}

export default genInfo