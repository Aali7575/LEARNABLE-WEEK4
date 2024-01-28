//Using ES6+ classes, prepare code that computes descriptive statistics.
// Use the refreshment below to refresh your memory.
//i. The measures of central tendency: 3 of them 

class Scores {
    constructor(math, shona, english) {
        this.math = math;
        this.shona = shona;
        this.english = english;
    }
    static avr (result){
        console.log(`The average of your scores is ${(result.math + result.shona + result.english)/ 3}`)
    }
}

Results = new Scores(76, 80, 99);
Scores.avr(Results);
