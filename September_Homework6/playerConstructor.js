const Player = function() {
    this.player = [];
    this.currentTrack = 0;
    this.stop = false;
}

const Song = function(song, artist) {
    this.song = song;
    this.artist = artist;
}

Player.prototype.add = function(SongConstructor) {
    this.player.push(SongConstructor);
}

Player.prototype.play = function() {
    let result = this.stop ? 'started': 'started to play'; 
    this.stop = false;
    return `${this.player[this.currentTrack].song} ${result}`;
}

Player.prototype.next = function() {
    let previousTrack = this.currentTrack;
    this.currentTrack += 1;

    if (this.currentTrack >= this.player.length)
        this.currentTrack = 0;

    return `${this.player[previousTrack].song} is paused, ${this.player[this.currentTrack].song} is started`;
}

Player.prototype.stopTrack = function() {
    this.stop = true;
    return `${this.player[this.currentTrack].song} is stopped`;
}



