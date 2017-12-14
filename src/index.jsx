import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

render(<App name="yay" />, document.body);

module.hot.accept();
