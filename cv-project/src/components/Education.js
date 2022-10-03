import {Component} from 'react';

class Education extends Component {
    render() {
        return (
        <div className='Education' style={{
            display: 'flex',
            flexDirection:'column',
            width: '20vw',
                        }}>
          <label>Institution:</label>
          <input type={'text'}></input>
          <label>Major:</label>
          <input type={'text'}></input>
          <label>Gpa:</label>
          <input type={'text'}></input>

        </div>
        )
      }
}

export {Education};