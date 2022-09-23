import Fighter, { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }
  
  public get lifePoints() : number {
    return this._lifePoints;
  }

  public get strength() : number {
    return this._strength;
  }

  public receiveDamage(attackPoints: number): number {
    const deathValue = -1;
    const damage: number = attackPoints - this._lifePoints;
    if (damage > 0) this._lifePoints -= damage;
    if (this._lifePoints <= 0) this._lifePoints = deathValue;
    return this._lifePoints;
  }

  public attack(enemy: Fighter): void {
    const damage: number = this.strength;
    enemy.receiveDamage(damage);
  }
}