import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  private static rangerArchetypeInstancesCount = 0;
  private _attack: EnergyType;

  constructor(name: string) {
    Ranger.rangerArchetypeInstancesCount += 1;
    super(name);
    this._attack = 'stamina';
  }

  public get energyType(): EnergyType {
    return this._attack;
  }

  public static createdArchetypeInstances() : number {
    return this.rangerArchetypeInstancesCount;
  }
}