import {SpellModel} from '../SpellModel';
import {DamageSpell} from '../DamageSpell';

export class BackstabSpell extends SpellModel {

  constructor() {
    super('Backstab', 2, 1, false, false);
    this.registerCastableChild(new DamageSpell(2));
  }

}
