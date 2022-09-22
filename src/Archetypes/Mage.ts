import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  private static mageArchetypeInstancesCount = 0;
  private _attack: EnergyType;

  constructor(name: string) {
    Mage.mageArchetypeInstancesCount += 1;
    super(name);
    this._attack = 'mana';
  }

  public get energyType(): EnergyType {
    return this._attack;
  }

  public static createdArchetypeInstances() : number {
    return this.mageArchetypeInstancesCount;
  }
}