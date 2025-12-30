import React from 'react';
import ReactDOM from 'react-dom/client';

export function App(){
  const msg = "hellooooo!!!";
  const msgHeader = <h1>{msg}</h1>
  const msgElem = React.createElement(msgHeader);
  const root = ReactDOM.createRoot(document.getElementById('root'));
}