
import './App.css';
import {Component} from 'react';
import {Education} from './components/Education.js';
import Header from './components/Header';
import GenInfo from './components/GenInfo';
import Experience from './components/Experience';
import Horizontal from './components/Horizontal';



class App extends Component {


  render(){
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems:'center',
          height: '15vh',
          backgroundColor:'pink',

        }}>
        <Header/>
      </div>
      <Horizontal title='General Information'/>
      
      <GenInfo/>
      <Horizontal title='Experience'/>
      <Experience/>
      <Horizontal title='Education'/>
      <Education/>


      
      
    </div>
  );
  }
}

export default App;
