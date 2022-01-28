import React, {useState} from 'react';
import './App.css';
import DrawLine from './examples/DrawLine';
import Cube3d from './examples/Cube3d';

const MyComponents = {
  Cube3d: () => {
    return (<Cube3d/>);
  },
  DrawLine: () => {
    return (<DrawLine/>);
  }
}

function App() { 
  const [displayComponent, setDisplayComponent] = useState(MyComponents.Cube3d);

  // function handleChange(e) {
  //   e = e || window.event;
  //   e = e.target || e.srcElement;
  //   if(e.nodeName === 'BUTTON') {
  //     console.log(MyComponents[e.id]);
  //     setDisplayComponent(MyComponents[e.id])
  //   }
  // }



  return (
    <>
      {/* <button id="DrawLine" onClick={handleChange}>DrawLine</button>
      <button id="Cube3d" onClick={handleChange}>Cube3d</button>
      <div id="app">
      </div> */}
      {displayComponent}
    </>
  );
}

export default App;
