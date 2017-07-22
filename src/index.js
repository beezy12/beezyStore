import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Item from './components/item';


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Item />
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
