import { Monster } from "../../types/monster";

const monsters: Monster[] = [
  {
    name: "Goblin",
    imageUrl: "../images/monsters/goblin__idle.gif",
    health: 1,
    damage: 1,
    coinsDrop: 1,
    appearanceRate: 0.7,
  },
  {
    name: "Ogre",
    imageUrl: "../images/monsters/ogre__idle.gif",
    health: 1,
    damage: 1,
    coinsDrop: 1,
    appearanceRate: 0.2,
  },
  {
    name: "Orc",
    imageUrl: "../images/monsters/orc__idle.gif",
    health: 1,
    damage: 1,
    coinsDrop: 1,
    appearanceRate: 0.1,
  },
];

class MonsterFeature {
  monster: Monster;

  getMonster(): Monster {
    this.monster = this.getRandomMonster();
    return this.monster;
  }

  private getRandomMonster(): Monster {
    const weighedMonsters: string[] = [];

    monsters.forEach((monster) => {
      for (let i = 0; i < monster.appearanceRate; i += 0.01) {
        weighedMonsters.push(monster.name);
      }
    });

    const index = this.getRandomValueBetween(0, weighedMonsters.length - 1);

    return {
      ...monsters.find((monster) => monster.name === weighedMonsters[index]),
    };
  }

  private getRandomValueBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

const monsterFeature = new MonsterFeature();

export default monsterFeature;
