import "@hotwired/turbo-rails"
import "./controllers"

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  let [counter, setCounter] = useState(0)
  const increment = () => {
    setCounter((prev) => prev + 1)
  }
  return (
    <>
      <h1>
        Count: {counter}
      </h1>
      <button onClick={increment}>increment</button>
    </>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);