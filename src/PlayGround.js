import React, {Component} from 'react'
import render from 'react-dom'

import GameBoard from './GameBoard'
import ScoreCard from './ScoreCard'
import Timer from './Timer'

import GameEngine from './store/GameEngine'
import GameActions from './action/GameActions'

import GameComponent from './GameComponent'


class PlayGround extends GameComponent {


    render() {
        return (
            <div>
                <GameBoard/>
                <ScoreCard/>
                <Timer elapsed={this.state.elapsed}
                       total={this.state.total}
                       isStarted={this.state.isStarted}/>

                <button onClick={() => this.startGame()}>Start</button>
            </div>

        );
    }

    startGame() {
        GameActions.startGame();
    }

    stopGame() {
        GameActions.stopGame();
    }

    updateGame() {
        GameActions.updateGame();
    }
}

export  default PlayGround;