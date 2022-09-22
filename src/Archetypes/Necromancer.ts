import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  private static necroArchetypeInstancesCount = 0;
  private _attack: EnergyType;

  constructor(name: string) {
    Necromancer.necroArchetypeInstancesCount += 1;
    super(name);
    this._attack = 'mana';
  }

  public get energyType(): EnergyType {
    return this._attack;
  }

  public static createdArchetypeInstances() : number {
    return this.necroArchetypeInstancesCount;
  }
}