import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function prepareAsyncSW() {
  if (true || process.env.NODE_ENV === 'development') {
    const { worker } = require('./mocks/browser')
    console.log("MOCK SW Running");
    worker.start()
  }

  return Promise.resolve();
}

const root = ReactDOM.createRoot(document.getElementById('root'));

prepareAsyncSW().then(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
