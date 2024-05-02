import { FightText } from "../../types/fight-text";
import { Monster } from "../../types/monster";
import monsterFeature from "../Monster";
import playerFeature from "../Player";
import textFeature from "../Text";

class FightFeature {
  fight(monster: Monster): FightText[] {
    const textResult: FightText[] = [];

    if (this.isPlayerDead()) {
      const playerHurtText = textFeature.getPlayerHurtText();
      textResult.push(playerHurtText);
      return textResult;
    }

    const damageDealt = this.playerHitMonster();
    const playerWeapon = playerFeature.getPlayer().weapons[0];
    textResult.push(
      ...textFeature.getPlayerAttackText(playerWeapon, damageDealt),
      textFeature.getLineBreak()
    );

    if (this.isMonsterDead()) {
      const droppedCoins = this.getCoinsDropFromMonster();

      textResult.push(
        ...textFeature.getMonsterDefeatedText(droppedCoins, monster.name),
        textFeature.getLineBreak()
      );

      playerFeature.updatePlayerCoins(droppedCoins);
      return textResult;
    }

    textResult.push(
      ...textFeature.getMonsterSurvivedText(monster.health),
      textFeature.getLineBreak()
    );

    const damageReceived = this.monsterHitPlayer();

    textResult.push(
      ...textFeature.getMonsterAttackText(monster.name, damageReceived),
      textFeature.getLineBreak()
    );

    const playerHealth = playerFeature.getPlayerHealth();
    const playerMaxHealth = playerFeature.getPlayerHealth();

    textResult.push(
      ...textFeature.getPlayerSurvivedText(playerHealth, playerMaxHealth),
      textFeature.getLineBreak()
    );

    if (this.isPlayerDead()) {
      alert(textFeature.getGameOverText());

      playerFeature.gameOver();
      window.location.replace("/");
    }

    return textResult;
  }

  playerHitMonster(): number {
    // TODO: Add player damage based on weapons
    const playerDamage = 5;
    const damage =
      -1 * (playerDamage + Math.round((playerDamage / 2) * Math.random()));

    monsterFeature.updateMonsterHealth(damage);

    return damage;
  }

  monsterHitPlayer(): number {
    const monsterDamage = monsterFeature.getMonsterDamage();
    const damage = Math.round(-2 * (monsterDamage * Math.random()));
    playerFeature.updatePlayerHealth(damage);

    return damage;
  }

  isPlayerDead(): boolean {
    return playerFeature.getPlayerHealth() <= 0;
  }

  isMonsterDead(): boolean {
    return monsterFeature.getMonsterHealth() <= 0;
  }

  getCoinsDropFromMonster(): number {
    const coins = monsterFeature.getMonsterCoinsDrop();

    return Math.round(coins * (2 * Math.random()));
  }
}

const fightFeature = new FightFeature();

export default fightFeature;
