import alt from './../alt';
import  GameActions from './../action/GameActions'

class GameEngine {
    constructor() {

        this.total = 5;
        this.elapsed = 0;
        this.isStarted = false;
        this.score = 0;
        this.board = GameEngine.initializeBoard();

        this.bindListeners({
            startGame: GameActions.START_GAME,
            stopGame: GameActions.STOP_GAME,
            updateGame: GameActions.UPDATE_GAME,
            updateScore: GameActions.UPDATE_SCORE
        });
    }


    startGame() {
        this.elapsed = 0;
        this.isStarted = true;
        this.score = 0;
    }

    stopGame() {
        this.isStarted = false;
        this.board = GameEngine.initializeBoard();
    }

    updateGame() {
        if (this.elapsed == this.total) {
            this.stopGame();
        } else {
            if (this.isStarted) {
                this.elapsed++;
                var active = Math.ceil(GameEngine.getRandomArbitrary(0, 15));
                this.board = GameEngine.initializeBoard();
                this.board[active] = 1;
            }
        }


    }

    updateScore(score) {
        this.score += score;
    }

    static initializeBoard() {
        return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    static getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
}

export default alt.createStore(GameEngine, 'GameEngine');