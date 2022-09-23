import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _name: string;
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf('elf', this._dexterity);
    this._archetype = new Mage('mage');
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { type_: 'mana', amount: getRandomInt(1, 10) };
    this._name = name;
  }
  
  public get race() : Race {
    return this._race;
  }
  
  public get archetype() : Archetype {
    return this._archetype;
  }
  
  public get lifePoints() : number {
    return this._lifePoints;
  }
  
  public get strength() : number {
    return this._strength;
  }

  public get defense() : number {
    return this._defense;
  }

  public get dexterity() : number {
    return this._dexterity;
  }

  public get energy() : Energy {
    const energy = {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
    return energy;
  }

  public receiveDamage(attackPoints: number): number {
    const deathValue = -1;
    const damage: number = attackPoints - this._defense;
    if (damage > 0) this._lifePoints -= damage;
    if (this._lifePoints <= 0) this._lifePoints = deathValue;
    return this._lifePoints;
  }

  public attack(enemy: Fighter): void {
    const damage: number = this.strength;
    enemy.receiveDamage(damage);
  }
  
  public levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = 99;
    }
    this._lifePoints = this._maxLifePoints;
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
  }

  public special(enemy: Fighter): void {
    const damage: number = this.strength * getRandomInt(3, 5);
    enemy.receiveDamage(this.receiveDamage(damage));
  }
}

export default Character;