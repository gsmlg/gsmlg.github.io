import React, {Component, PropTypes} from 'react'

export default class Heroes extends Component {
    
    propTypes = {
        heroes: PropTypes.array.isRequired
    }
    
    getList () {
        return this.props.heroes.map(function(hero, i){
            return (<li key={i}>
                <img className="hero-img" src={hero.head_img} />
                <span className="hero-name">{hero.name}</span>
            </li>);
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
