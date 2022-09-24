import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(private _playerOne: Fighter, private _playerTwo: Fighter) {
    super(_playerOne);
  }
  
  fight(): number {
    const p1 = this._playerOne;
    const p2 = this._playerTwo;
    while (p1.lifePoints > 0 && p2.lifePoints > 0) {
      p1.attack(p2);
      p2.attack(p1);
    }
    return super.fight();
  }
}