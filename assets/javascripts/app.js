import React,{Component} from 'react';
import Clock from './clock';
import Heroes from './heroes';

class App extends Component {

    render () {
        return (
            <div>
                <Clock />
                <h1>Application</h1>
                <Heroes />
            </div>
        );
    }
}

export default App;
