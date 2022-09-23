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
    let result = 0;
    const p1 = this._playerOne;
    const env = this._environment;

    env.forEach((monster) => { 
      p1.attack(monster); 
      if (env.every(() => monster.lifePoints === -1)) { result = 1; }
    });
    
    env.forEach((monster) => {
      monster.attack(p1);
      if (p1.lifePoints === -1) { result = -1; }
    });

    return result;
  }
}