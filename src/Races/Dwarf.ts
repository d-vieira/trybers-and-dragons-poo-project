import Race from './Race';

export default class Dwarf extends Race {
  private static dwarfInstancesCount = 0;
  private _maxLifePoints: number;

  constructor(raceName: string, dex: number) {
    Dwarf.dwarfInstancesCount += 1;
    super(raceName, dex);
    this._maxLifePoints = 80;
  }
  
  public get maxLifePoints() : number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances() : number {
    return this.dwarfInstancesCount;
  }
}