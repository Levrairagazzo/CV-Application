import React, { Component } from 'react'

export class Experience extends Component {
  render() {
    return (
    <div className='Experience' style={{
        display: 'flex',
        flexDirection:'column',
        width: '20vw',
                    }}>
      <label>Title:</label>
      <input type={'text'}></input>
      <label>Company:</label>
      <input type={'text'}></input>
    </div>
    )
  }
}

export default Experience