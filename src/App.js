import React from 'react';
import './scss/app.scss';
import Header from './components/Header/index'
import Nav from './components/Nav/index'


function App() {
  return (
    <div className="App">
      <Nav></Nav>
     <Header></Header>
     <div id='a-propos' style={{marginLeft:'18px', padding:'0px 12px 0px 12px'}}>
       <h2>A propos</h2>
       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
     </div>
     <div id='portfolio' style={{marginLeft:'18px', padding:'0px 12px 0px 12px'}}>
      <h2>Portfolio</h2>
     </div>
    </div>
  );
}

export default App;