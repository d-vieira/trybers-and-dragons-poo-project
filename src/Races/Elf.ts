import Race from './Race';

export default class Elf extends Race {
  private static elfInstancesCount = 0;
  private _maxLifePoints: number;

  constructor(raceName: string, dex: number) {
    Elf.elfInstancesCount += 1;
    super(raceName, dex);
    this._maxLifePoints = 99;
  }
  
  public get maxLifePoints() : number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances() : number {
    return this.elfInstancesCount;
  }
}