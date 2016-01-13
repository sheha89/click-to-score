import React, {Component} from 'react'
import render from 'react-dom'

import GameEngine from './store/GameEngine'
import GameActions from './action/GameActions'

import GameComponent from './GameComponent'

import Box from './Box'

class  GameBoard extends GameComponent{


    render(){

        var boxes  = this.state.board.map((element) => {
            return <Box active={element}/>
        });

        return(
            <div className="board">
                {boxes}
            </div>
        );
    }
}

export  default GameBoard;