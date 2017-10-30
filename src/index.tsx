// registerServiceWorker();

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import { articles } from './fixtures';
import './index.css';

// function HelloWorld() {
//     return <h1>Hello World</h1>
// }
ReactDOM.render(
  <App articles={articles}/>,
  document.getElementById('root') as HTMLElement 
  );
// render(<Article/>, document.getElementById('container'));