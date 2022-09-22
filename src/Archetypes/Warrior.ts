import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private static warriorArchetypeInstancesCount = 0;
  private _attack: EnergyType;

  constructor(name: string) {
    Warrior.warriorArchetypeInstancesCount += 1;
    super(name);
    this._attack = 'stamina';
  }

  public get energyType(): EnergyType {
    return this._attack;
  }

  public static createdArchetypeInstances() : number {
    return this.warriorArchetypeInstancesCount;
  }
}