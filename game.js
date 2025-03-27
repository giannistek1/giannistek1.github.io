// Artists data (you'll replace this with your full list)
const artists = [
    {
        artistName: "BTS",
        groupType: "Boy Band",
        members: 7,
        generation: 4,
        debutYear: 2013,
        popularity: 90,
        albums: 10
    },
    // Add more artists here
    {
        artistName: "BLACKPINK",
        groupType: "Girl Group",
        members: 4,
        generation: 4,
        debutYear: 2016,
        popularity: 85,
        albums: 8
    },
    {
        artistName: "EXO",
        groupType: "Boy Band",
        members: 9,
        generation: 3,
        debutYear: 2012,
        popularity: 80,
        albums: 7
    }
];

class KpopArtistGame {
    constructor() {
        this.targetArtist = null;
        this.guessHistory = [];
        this.winningStreak = 0;
        this.totalGamesPlayed = 0;
        this.totalGuesses = 0;
        this.guessesInCurrentGame = 0;
        this.isGameWon = false;
        this.isGiveUp = false;

        this.initializeElements();
        this.bindEvents();
        this.startNewGame();
    }

    initializeElements() {
        this.artistInput = document.getElementById('artist-input');
        this.submitButton = document.getElementById('submit-guess');
        this.newGameButton = document.getElementById('new-game');
        this.giveUpButton = document.getElementById('give-up');
        this.gameMessage = document.getElementById('game-message');
        this.guessHistory = document.getElementById('guess-history');
        this.winningStreakElement = document.getElementById('winning-streak');
        this.averageGuessesElement = document.getElementById('avg-guesses');
    }

    bindEvents() {
        this.submitButton.addEventListener('click', () => this.makeGuess());
        this.newGameButton.addEventListener('click', () => this.startNewGame());
        this.giveUpButton.addEventListener('click', () => this.giveUp());
        this.artistInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.makeGuess();
        });
    }

    startNewGame() {
        this.targetArtist = this.getRandomArtist();
        this.guessHistory.innerHTML = '';
        this.guessesInCurrentGame = 0;
        this.isGameWon = false;
        this.isGiveUp = false;
        this.artistInput.value = '';
        this.gameMessage.textContent = 'Start guessing!';
        this.giveUpButton.style.display = 'inline-block';
        this.submitButton.style.display = 'inline-block';
    }

    getRandomArtist() {
        return artists[Math.floor(Math.random() * artists.length)];
    }

    makeGuess() {
        const guessedArtistName = this.artistInput.value.trim();
        const guessedArtist = artists.find(a => a.artistName.toLowerCase() === guessedArtistName.toLowerCase());

        if (!guessedArtist) {
            alert('Artist not found. Please try again.');
            return;
        }

        this.guessesInCurrentGame++;
        const feedback = this.checkGuess(guessedArtist, this.targetArtist);
        this.displayGuess(guessedArtist, feedback);

        if (feedback.isArtistNameCorrect) {
            this.handleCorrectGuess();
        }

        this.artistInput.value = '';
    }

    checkGuess(guessedArtist, targetArtist) {
        return {
            artistName: guessedArtist.artistName,
            groupType: this.compareProperty(guessedArtist.groupType, targetArtist.groupType),
            members: this.compareNumericProperty(guessedArtist.members, targetArtist.members),
            generation: this.compareNumericProperty(guessedArtist.generation, targetArtist.generation),
            debutYear: this.compareNumericProperty(guessedArtist.debutYear, targetArtist.debutYear),
            popularity: this.compareNumericProperty(guessedArtist.popularity, targetArtist.popularity),
            albums: this.compareNumericProperty(guessedArtist.albums, targetArtist.albums),
            isArtistNameCorrect: guessedArtist.artistName === targetArtist.artistName,
            isGroupTypeCorrect: guessedArtist.groupType === targetArtist.groupType
        };
    }

    compareProperty(guessedValue, targetValue) {
        return guessedValue === targetValue ? guessedValue : `${guessedValue} ❌`;
    }

    compareNumericProperty(guessedValue, targetValue) {
        if (guessedValue === targetValue) return `${guessedValue} ✅`;
        if (Math.abs(guessedValue - targetValue) === 1) return `${guessedValue} ⚠️`;
        return guessedValue > targetValue ? `${guessedValue} ↓` : `${guessedValue} ↑`;
    }

    displayGuess(guessedArtist, feedback) {
        const guessElement = document.createElement('div');
        guessElement.classList.add('guess-item');
        
        guessElement.innerHTML = `
            <h3>${feedback.artistName}</h3>
            <div>
                <span class="property-chip ${feedback.groupType === guessedArtist.groupType ? 'correct' : 'incorrect'}">Group Type: ${feedback.groupType}</span>
                <span class="property-chip ${feedback.members.includes('✅') ? 'correct' : feedback.members.includes('⚠️') ? 'close' : 'incorrect'}">Members: ${feedback.members}</span>
                <span class="property-chip ${feedback.generation.includes('✅') ? 'correct' : feedback.generation.includes('⚠️') ? 'close' : 'incorrect'}">Generation: ${feedback.generation}</span>
                <span class="property-chip ${feedback.debutYear.includes('✅') ? 'correct' : feedback.debutYear.includes('⚠️') ? 'close' : 'incorrect'}">Debut Year: ${feedback.debutYear}</span>
                <span class="property-chip ${feedback.popularity.includes('✅') ? 'correct' : feedback.popularity.includes('⚠️') ? 'close' : 'incorrect'}">Popularity: ${feedback.popularity}</span>
                <span class="property-chip ${feedback.albums.includes('✅') ? 'correct' : feedback.albums.includes('⚠️') ? 'close' : 'incorrect'}">Albums: ${feedback.albums}</span>
            </div>
        `;

        this.guessHistory.prepend(guessElement);
    }

    handleCorrectGuess() {
        this.isGameWon = true;
        this.winningStreak++;
        this.totalGamesPlayed++;
        this.totalGuesses += this.guessesInCurrentGame;

        this.gameMessage.textContent = `Congratulations! You guessed ${this.targetArtist.artistName} correctly!`;
        this.winningStreakElement.textContent = this.winningStreak;
        this.averageGuessesElement.textContent = (this.totalGuesses / this.totalGamesPlayed).toFixed(1);

        this.giveUpButton.style.display = 'none';
        this.submitButton.style.display = 'none';
    }

    giveUp() {
        this.isGiveUp = true;
        this.totalGamesPlayed++;
        this.totalGuesses += this.guessesInCurrentGame;

        this.gameMessage.textContent = `You gave up! The correct artist was ${this.targetArtist.artistName}.`;
        this.winningStreakElement.textContent = this.winningStreak;
        this.averageGuessesElement.textContent = (this.totalGuesses / this.totalGamesPlayed).toFixed(1);

        this.giveUpButton.style.display = 'none';
        this.submitButton.style.display = 'none';
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new KpopArtistGame();
});
