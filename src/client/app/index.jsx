import React from 'react';
import {render} from 'react-dom';
import TestComponent from './test-component.jsx';

class App extends React.Component {
    render () {
        return (
            <div>
                <p>Hello React!</p>
                <TestComponent />
            </div>

        );
    }
}

render(<App/>, document.getElementById('app'));