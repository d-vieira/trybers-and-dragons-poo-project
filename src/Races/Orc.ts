import Race from './Race';

export default class Orc extends Race {
  private static orcInstancesCount = 0;
  private _maxLifePoints: number;

  constructor(raceName: string, dex: number) {
    Orc.orcInstancesCount += 1;
    super(raceName, dex);
    this._maxLifePoints = 74;
  }
  
  public get maxLifePoints() : number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances() : number {
    return this.orcInstancesCount;
  }
}