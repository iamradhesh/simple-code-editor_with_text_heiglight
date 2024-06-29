// Importing the React library to use JSX and create components.
import React from 'react';

// Importing the CodeEditor component from the specified path.
import CodeEditor from './components/CodeEditor/CodeEditor';

// Importing the CSS file for styling the App component.
import './App.css';

// Defining the main App component.
function App() {
  return (
    // The root div for the App component with a className "App".
    <div className="App">
      {/* Main heading for the application */}
      <h1>react-simple-code-editor</h1>
      {/* Brief description of the application */}
      <p>A simple no-frills code editor with syntax highlighting.</p>
      {/* Including the CodeEditor component within the App component */}
      <CodeEditor />
    </div>
  );
}

// Exporting the App component as the default export.
export default App;
