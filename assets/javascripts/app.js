import React,{Component} from 'react';
import Clock from './clock';
import Heroes from './heroes';

class App extends Component {

    render () {
        
        let heroes = [
            {name: 'Joe', head_img: 'img/joe'},
            {name: 'Foe', head_img: 'img/foe'},
            {name: 'Loe', head_img: 'img/loe'},
            {name: 'Roe', head_img: 'img/roe'},
            {name: 'Moe', head_img: 'img/moe'},
            {name: 'Yoe', head_img: 'img/yoe'},
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
