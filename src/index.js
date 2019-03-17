import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GridLayout from './components/GridLayout';

function App() {
    return (
        <div className="container">
            <GridLayout />
        </div>
    );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
