class Shiritory {
    constructor() {
        this.words = [];
        this.game_over = false;
    }

    play(word) {
        const last_word = this.words[this.words.length-1];

        if (!this.game_over && this.words.length === 0 || (!this.words.includes(word) && last_word[last_word.length-1] === word[0])) {
            this.words.push(word);
            return this.words;
        }

        this.game_over = true;
        return 'Game Over!';

    }

    restart(){
        this.words.length = 0;
    }
}
