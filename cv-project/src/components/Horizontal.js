import React, { Component } from 'react'

export class Horizontal extends Component {

  render() {
    return (
        <div
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}
      >
        <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />

        <div>
          <h2 style={{width: '250px', textAlign:'center'}}>{this.props.title}{this.props.second}</h2>
        </div>

        <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
      </div>
    )
  }
}

export default Horizontal