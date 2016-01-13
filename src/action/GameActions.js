import alt from './../alt';

class GameActions {
    startGame() {
        this.dispatch();
    }

    stopGame() {
        this.dispatch();
    }

    updateGame() {
        this.dispatch();
    }

    updateScore(score) {
        this.dispatch(score);
    }


}

export default alt.createActions(GameActions);