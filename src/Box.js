import React, {Component} from 'react'
import render from 'react-dom'

import GameActions from './action/GameActions'

class Box extends Component {

    render() {
        return (
            <div className={this.props.active == 1? 'red' : 'blue'}
            onClick={() => this.play()}></div>
        );
    }

    play(){
        if(this.props.active){
            GameActions.updateScore(5);
        }
    }
}


export  default Box;