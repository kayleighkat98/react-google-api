import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import './index.css';

fetch('https://www.googleapis.com/books/v1/volumes?q=LostHero')

ReactDOM.render(<App />, document.getElementById('root'));