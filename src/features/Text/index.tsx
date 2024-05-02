import { FightText } from "../../types/fight-text";

class TextFeature {
  getMonsterEncounterText(monsterName: string): FightText {
    const completeMonsterName =
      monsterName === "Goblin" ? "a " + monsterName : "an " + monsterName;

    const encounterText: FightText = {
      text: `You see ${completeMonsterName}.`,
      color: "black",
      type: "span",
    };

    return encounterText;
  }

  getPlayerHurtText(): FightText {
    return {
      text: "You are too hurt to fight. Return to the town.",
      color: "red",
      type: "p",
    };
  }

  getPlayerAttackText(playerWeapon: string, damage: number): FightText[] {
    const playerAttackText: FightText[] = [
      {
        text: `You swing your`,
        color: "black",
        type: "span",
      },
      {
        text: ` ${playerWeapon} `,
        color: "grey",
        type: "span",
      },
      {
        text: `against the monster! Dealt`,
        color: "black",
        type: "span",
      },
      { text: ` ${-1 * damage} `, color: "red", type: "span" },
      { text: `damage.`, color: "black", type: "span" },
    ];

    return playerAttackText;
  }

  getMonsterDefeatedText(
    droppedCoins: number,
    monsterName: string
  ): FightText[] {
    const result: FightText[] = [];

    result.push({
      text: "You have defeated the monster!",
      color: "green",
      type: "p",
    });
    result.push(
      {
        text: "You have obtained",
        color: "black",
        type: "span",
      },
      {
        text: ` ${droppedCoins} coin `,
        color: "gold",
        type: "span",
      },
      {
        text: `from the defeated ${monsterName}.`,
        color: "black",
        type: "span",
      }
    );
    result.push();

    return result;
  }

  getMonsterSurvivedText(monsterHealth: number): FightText[] {
    return [
      {
        text: "Monster still has",
        color: "black",
        type: "span",
      },
      {
        text: ` ${monsterHealth} `,
        color: "red",
        type: "span",
      },
      {
        text: "hit points left.",
        color: "black",
        type: "span",
      },
    ];
  }

  getMonsterAttackText(monsterName: string, damage: number): FightText[] {
    const monsterAttackText: FightText[] = [
      {
        text: `You were attacked by the ${monsterName}! Lost`,
        color: "black",
        type: "span",
      },
      { text: ` ${damage * -1} `, color: "red", type: "span" },
      { text: `health points.`, color: "black", type: "span" },
    ];

    return monsterAttackText;
  }

  getPlayerSurvivedText(
    playerHealth: number,
    playerMaxHealth: number
  ): FightText[] {
    const result: FightText[] = [];

    result.push(
      {
        text: "You have",
        color: "black",
        type: "span",
      },
      {
        text: ` ${playerHealth} `,
        color: "red",
        type: "span",
      },
      {
        text: "hitpoints left.",
        color: "black",
        type: "span",
      }
    );

    if (playerHealth / playerMaxHealth < 0.1) {
      result.push({
        text: "Your health is low! Be careful",
        color: "red",
        type: "p",
      });
    }

    return result;
  }

  getGameOverText(): string {
    return "Unfortunately you have died and lost all progress. HINT: There is no shame in running from strong foes!";
  }

  getLineBreak(): FightText {
    return { text: "", color: "black", type: "p" };
  }
}

const textFeature = new TextFeature();

export default textFeature;
