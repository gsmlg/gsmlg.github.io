import React,{Component} from 'react';
import Clock from './clock';
import Heroes from './heroes';

class App extends Component {

    render () {
        
        let heroes = [
            {name: 'Joe', head_img: 'img'},
            {name: 'Foe', head_img: 'img'},
            {name: 'Loe', head_img: 'img'},
            {name: 'Roe', head_img: 'img'},
            {name: 'Moe', head_img: 'img'},
            {name: 'Yoe', head_img: 'img'},
        ];
        
        return (
            <div>
                <Clock />
                <h1>Application</h1>
                <Heroes heroes={heroes} />
            </div>
        );
    }
}

export default App;
