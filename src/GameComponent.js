import React, {Component} from 'react'
import render from 'react-dom'

import GameEngine from './store/GameEngine'


class  GameComponent extends Component {

    constructor(props) {
        super(props);
        this.state = GameEngine.getState();
    }

    componentDidMount() {
        GameEngine.listen((state) => this.onChange(state));
    }

    componentWillUnmount() {
        GameEngine.unlisten((state) => this.onChange(state));
    }

    onChange(state) {
        this.setState(state);
    }
}

export default GameComponent;