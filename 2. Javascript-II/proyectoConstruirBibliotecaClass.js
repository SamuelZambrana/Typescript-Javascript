class Media {
    constructor() {
      this._title = '';
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title() {
        return this._title;
    }
  
    get isCheckedOut() {
        return this._isCheckedOut;
    }
  
    get ratings() {
        return this._ratings;
    }
  
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
    }
  
    getAverageRating() {
      let sum = this.ratings.reduce((a, b) => a + b, 0);
      let avg = sum / this.ratings.length;
      return avg;
    }
  
    addRating(rating) {
      this._ratings.push(rating);
    }
  
   }
  
  class Book extends Media {
    constructor(author, title, pages) {
      super(title, false, []);
      this._author = author;
      this._pages = pages;
    }
  
    get author() {
        return this._author;
    }
  
    get pages() {
        return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor(director, title, runTime) {
      super(title, false, []);
      this._director = director;
      this._runTime = runTime;
    }
  
    get director() {
      return this._director;
    }
  
    get runTime() {
      return this._runTime
    }
  }
  
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.getAverageRating());
  
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());
  
  