class Rule {
  constructor(params) {
    Object.assign(this, params);
  }

  sum(dice) {
    return dice.reduce((prev, curr) => prev + curr);
  }

  freq(dice) {
    const freqs = new Map();
    for (let d of dice) freqs.set(d, (freqs.get(d) || 0) + 1);
    return Array.from(freqs.values());
  }

  count(dice, val) {
    return dice.filter((d) => d === val).length;
  }
}

class TotalOneNumber extends Rule {
  evalRoll = (dice) => {
    return this.val * this.count(dice, this.val);
  };
}

class SumDistro extends Rule {
  evalRoll = (dice) => {
    return this.freq(dice).some((c) => c >= this.count) ? this.sum(dice) : 0;
  };
}

class FullHouse extends Rule {
  evalRoll = (dice) => {
    const freqs = this.freq(dice);
    return freqs.includes(2) && freqs.includes(3) ? this.score : 0;
  };
}

class SmallStraight extends Rule {
  evalRoll = (dice) => {
    const d = new Set(dice);
    if ((d.has(2) && d.has(3) && d.has(4) && d.has(5)) || d.has(1)) {
      return this.score;
    }
    if ((d.has(3) && d.has(4) && d.has(5) && d.has(6)) || d.has(2)) {
      return this.score;
    }
    return 0;
  };
}

class LargeStraight extends Rule {
  evalRoll = (dice) => {
    const d = new Set(dice);
    return d.size === 5 && (!d.has(1) || !d.has(6)) ? this.score : 0;
  };
}

class Yahtzee extends Rule {
  evalRoll = (dice) => {
    return this.freq(dice)[0] === 5 ? this.score : 0;
  };
}

const ones = new TotalOneNumber({ val: 1, desc: 'total des 1' });
const twos = new TotalOneNumber({ val: 2, desc: 'total des 2' });
const threes = new TotalOneNumber({ val: 3, desc: 'total des 3' });
const fours = new TotalOneNumber({ val: 4, desc: 'total des 4' });
const fives = new TotalOneNumber({ val: 5, desc: 'total des 5' });
const sixes = new TotalOneNumber({ val: 6, desc: 'total des 6' });

const threeOfKind = new SumDistro({ count: 3, desc: 'total des 5 dés' });
const fourOfKind = new SumDistro({ count: 4, desc: 'total des 5 dés' });
const fullHouse = new FullHouse({ score: 25, desc: '25 points' });
const smallStraight = new SmallStraight({ score: 30, desc: '30 points' });
const largeStraight = new LargeStraight({ score: 40, desc: '40 points' });
const yahtzee = new Yahtzee({ score: 50, desc: '50 points' });
const chance = new SumDistro({ count: 0, desc: 'total des 5 dés' });

export {
  ones,
  twos,
  threes,
  fours,
  fives,
  sixes,
  threeOfKind,
  fourOfKind,
  fullHouse,
  smallStraight,
  largeStraight,
  yahtzee,
  chance,
};
