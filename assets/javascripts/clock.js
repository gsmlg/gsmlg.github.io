import React,{Component} from 'react';

export default class Clock extends Component {

    state = { time: new Date() }
    
    componentDidMount () {
        this.timer = setInterval(function(t){
            this.setState({time: new Date()});
        }.bind(this), 1000);
    }
    
    componentWillUnmount () {
        clearInterval(this.timer);
    }

    render () {
        return (
            <time dateTime={this.state.time.toISOString()}>{this.state.time.toLocaleTimeString()}</time>
        )
    }
    
}
