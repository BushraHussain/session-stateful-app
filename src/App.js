import React from 'react'; // useState is not default exported from react 
import Counter from './countApp';
                              // that's why we use "{" "}" around useState
import './App.css';

function App() {
  return (

    <div> 
      <Counter />
     </div>
 
  );
}

export default App;