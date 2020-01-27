import React from 'react';
import '../styles/App.scss';
import TodoContainer from '../components/TodoContainer'

// Import the Todo Component
// import Todo from './Todo'

function App() {
   return (
    <div className="App">
     
      <header className="App-header">
      <TodoContainer/>
        
     
      </header>
    </div>
  );
}

export default App;
