import Race from './Race';

export default class Halfling extends Race {
  private static halflingInstancesCount = 0;
  private _maxLifePoints: number;

  constructor(raceName: string, dex: number) {
    Halfling.halflingInstancesCount += 1;
    super(raceName, dex);
    this._maxLifePoints = 60;
  }
  
  public get maxLifePoints() : number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances() : number {
    return this.halflingInstancesCount;
  }
}