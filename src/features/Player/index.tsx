import { Player } from "../../types/player";

class PlayerFeature {
  player: Player;

  constructor() {
    const savedPlayer = this.getPlayerFromCache();
    if (savedPlayer) {
      this.player = savedPlayer;
    } else {
      this.generateNewPlayer();
    }
  }

  generateNewPlayer() {
    this.player = {
      bag: [],
      coins: 5,
      weapons: [],
      stats: { currentHealth: 5, maxHealth: 5 },
    };
    this.savePlayerInCache();
  }

  getPlayer() {
    return this.player;
  }

  getPlayerHealth() {
    return this.player.stats.currentHealth;
  }

  getPlayerMaxHealth() {
    return this.player.stats.maxHealth;
  }

  getPlayerWeapons() {
    return this.player.weapons;
  }

  updatePlayerCoins(value: number): boolean {
    if (this.player.coins + value < 0) {
      return false;
    } else {
      this.player.coins += value;
      this.savePlayerInCache();
      return true;
    }
  }

  addPlayerWeapon(weapon: string) {
    this.player.weapons.push(weapon);
    this.savePlayerInCache();
  }

  updatePlayerHealth(value: number) {
    this.player.stats.currentHealth += value;
    this.savePlayerInCache();
  }

  increasePlayerMaxHealth(value: number) {
    if (value < 0) return;
    this.player.stats.maxHealth += value;
    this.savePlayerInCache();
  }

  fillPlayerHealth() {
    this.player.stats.currentHealth = this.player.stats.maxHealth;
    this.savePlayerInCache();
  }

  private savePlayerInCache() {
    localStorage.setItem("player", JSON.stringify(this.player));
  }

  private getPlayerFromCache() {
    const savedPlayer = localStorage.getItem("player");

    return JSON.parse(savedPlayer);
  }

  gameOver() {
    this.generateNewPlayer();
  }
}

const playerFeature = new PlayerFeature();

export default playerFeature;
