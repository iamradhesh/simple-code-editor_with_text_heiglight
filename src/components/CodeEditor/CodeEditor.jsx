// Importing the React library and the useState hook for state management.
import React, { useState } from 'react';

// Importing the Editor component from the 'react-simple-code-editor' library.
import Editor from 'react-simple-code-editor';

// Importing the PrismJS library for syntax highlighting.
import Prism from 'prismjs';

// Importing the PrismJS CSS file for default syntax highlighting theme.
import 'prismjs/themes/prism.css';  // You can choose any theme you like

// Importing necessary languages for PrismJS to enable syntax highlighting.
import 'prismjs/components/prism-markup'; // For HTML syntax highlighting.
import 'prismjs/components/prism-javascript'; // For JavaScript syntax highlighting.
import 'prismjs/components/prism-jsx'; // For JSX syntax highlighting.

// Defining the CodeEditor component.
const CodeEditor = () => {
  // Using the useState hook to manage the state of the code editor content.
  const [code, setCode] = useState(
    `import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <h1>Hello world</h1>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));`
  );

  // Function to highlight the code using PrismJS.
  const highlight = (code) => {
    return Prism.highlight(code, Prism.languages.jsx, 'jsx');
  };

  // Returning the JSX to render the Editor component.
  return (
    <div>
      <Editor
        value={code} // The current value of the code editor.
        onValueChange={(code) => setCode(code)} // Function to update the code state when it changes.
        highlight={highlight} // Function to highlight the code.
        padding={10} // Padding inside the code editor.
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace', // Font family for the code editor.
          fontSize: 12, // Font size for the code editor.
        }}
      />
    </div>
  );
};

// Exporting the CodeEditor component as the default export.
export default CodeEditor;
