import { Monster } from "../../types/monster";

const monsters: Monster[] = [
  {
    name: "Goblin",
    imageUrl: "../images/monsters/goblin__idle.gif",
    health: 2,
    damage: 1,
    coinsDrop: 2,
    appearanceRate: 0.7,
  },
  {
    name: "Ogre",
    imageUrl: "../images/monsters/ogre__idle.gif",
    health: 10,
    damage: 3,
    coinsDrop: 10,
    appearanceRate: 0.2,
  },
  {
    name: "Orc",
    imageUrl: "../images/monsters/orc__idle.gif",
    health: 50,
    damage: 5,
    coinsDrop: 30,
    appearanceRate: 0.1,
  },
];

class MonsterFeature {
  monster: Monster;

  constructor() {
    this.setRandomMonster();
  }

  setRandomMonster(): Monster {
    const weighedMonsters: string[] = [];

    monsters.forEach((monster) => {
      for (let i = 0; i < monster.appearanceRate; i += 0.01) {
        weighedMonsters.push(monster.name);
      }
    });

    const index = this.getRandomValueBetween(0, weighedMonsters.length - 1);

    this.monster = {
      ...monsters.find((monster) => monster.name === weighedMonsters[index]),
    };

    return this.monster;
  }

  getMonster(): Monster {
    return this.monster;
  }

  getMonsterDamage(): number {
    return this.monster.damage;
  }

  getMonsterHealth(): number {
    return this.monster.health;
  }

  getMonsterCoinsDrop(): number {
    return this.monster.coinsDrop;
  }

  updateMonsterHealth(damage: number): number {
    return (this.monster.health += damage);
  }

  private getRandomValueBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

const monsterFeature = new MonsterFeature();

export default monsterFeature;
