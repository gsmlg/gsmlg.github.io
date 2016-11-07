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
            <div className="application-wrap">
                <Clock className="clock" />
                <h1 className="h1-title">Application</h1>
                <Heroes heroes={heroes} />
            </div>
        );
    }
}

export default App;
