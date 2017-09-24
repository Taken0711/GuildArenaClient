import {CharacterStatsModel} from "./CharacterStatsModel";

export class CharacterClassModel {

  constructor(public readonly name: string, public readonly description: string, public readonly characterName: string,
              public readonly stats: CharacterStatsModel) { }

}