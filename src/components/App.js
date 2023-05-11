import React from 'react';
import ReactDOM from 'react-dom';

// Define the App functional component
function App() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <p>This is my first React app.</p>
    </div>
  );
}

// Render the App component on the DOM element with id="root"
ReactDOM.render(<App />, document.getElementById('root'));
export default App
