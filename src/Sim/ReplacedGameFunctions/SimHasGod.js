import { SimGod1, SimGod2, SimGod3, SimObjects } from '../VariablesAndData';

/**
 * This function checks for the current God level in the sim data
 * It functions similarly to Game.hasGod()
 * @param	{string}	what	Name of the achievement
 */
export default function SimHasGod(what) {
  if (Game.hasGod) {
    if (SimObjects.Temple.minigame === undefined) {
      SimObjects.Temple.minigame = Game.Objects.Temple.minigame;
    }
    const god = SimObjects.Temple.minigame.gods[what];
    if (SimGod1 === god.id) {
      return 1;
    }
    if (SimGod2 === god.id) {
      return 2;
    }
    if (SimGod3 === god.id) {
      return 3;
    }
  }
  return false;
}
