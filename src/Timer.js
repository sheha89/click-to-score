import React, {Component} from 'react'
import render from 'react-dom'

import GameActions from './action/GameActions'

class Timer extends Component {

    constructor(props) {
        super(props);
    }

    componentWillUpdate(nextProps, nextState){
        if(!this.props.isStarted && nextProps.isStarted){
            this.start();
        }

        if(this.props.isStarted && !nextProps.isStarted){
            this.stop();
        }
    }

    render() {
        return (
            <h1>{ this.props.total - this.props.elapsed }</h1>

        );
    }

    start() {
        this.runner = setInterval(() => {
            this.run();
        }, 1000)
    }

    stop() {
        clearInterval(this.runner);
    }

    run() {
        GameActions.updateGame();
    }
}

export  default Timer;