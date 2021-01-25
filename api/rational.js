class Rational {
  constructor(numer = 1, denom = 1) {
    this.numer = numer;
    this.denom = denom;
  }

  getNumer() {
    return this.numer;
  }

  getDenom() {
    return this.denom;
  }

  setNumer(numer) {
    this.numer = numer;
  }

  setDenom(denom) {
    this.denom = denom;
  }

  add(rational) {
    const n1 = this.getNumer();
    const d1 = this.getDenom();
    const n2 = rational.getNumer();
    const d2 = rational.getDenom();
    return new Rational((n1 * d2 + n2 * d1), (d1 * d2));
  }

  ratToReal() {
    return this.getNumer() / this.getDenom();
  }
}

export default Rational;
