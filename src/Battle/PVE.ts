import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _playerOne: Fighter,
    private _environment: SimpleFighter[],
  ) {
    super(_playerOne);
  }
  
  fight(): number {
    const p1 = this._playerOne;
    const env = this._environment;
    env.forEach((monster) => {
      while (monster.lifePoints > 0 && p1.lifePoints > 0) {
        p1.attack(monster);
        monster.attack(p1);
      }
    });
    return super.fight();
  }
}