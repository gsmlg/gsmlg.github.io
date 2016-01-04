import React, {Component} from 'react'

export default class Heroes extends Component {
    
    props = { heroes: [] }
    
    getList () {
        var heroes = this.props.heroes || [];
        return heroes.map(function(hero, i){
            return (<li key={i}>
            <img className="hero-img" src={hero.head_img} />
            <span className="hero-name"></span>
            </li>)
        });
    }
    
    render () {
        return (
            <ul>
                {this.getList()}
            </ul>
        )
    }
}
