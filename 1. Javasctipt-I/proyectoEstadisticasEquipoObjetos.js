const team = {
    _players: [],
    _games: [],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      };
      let player2 = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      };
      this._players.push(player, player2);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
      this._games.push(game);
    }
  };
  
  team.addPlayer('Bugs', 'Bunny', 76);
  team.addGame('Titans', 100, 98);
  console.log(team);
  
  