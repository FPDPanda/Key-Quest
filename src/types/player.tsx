export interface Player {
  bag: string[];
  coins: number;
  weapons: string[];
  stats: PlayerStats;
}

interface PlayerStats {
  currentHealth: number;
  maxHealth: number;
}
