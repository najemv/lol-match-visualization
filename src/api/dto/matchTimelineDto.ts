import MetadataDto from "./metadataDto";

export type MatchTimelineDto = {
  metadata: MetadataDto;
  info: InfoDto;
};

export type InfoDto = {
  frameInterval: number;
  frames: FrameDto[];
};

export type FrameDto = {
  events: EventDto[];
  participantFrames: ParticipantFramesDto;
  timestamp: number;
};



export type ParticipantFramesDto = {
  1: ParticipantFrameDto;
  2: ParticipantFrameDto;
  3: ParticipantFrameDto;
  4: ParticipantFrameDto;
  5: ParticipantFrameDto;
  6: ParticipantFrameDto;
  7: ParticipantFrameDto;
  8: ParticipantFrameDto;
  9: ParticipantFrameDto;
  10: ParticipantFrameDto;
};

export type ParticipantFrameDto = {
  championStats: ChampionStatsDto;
  currentGold: number;
  damageStats: DamageStatsDto;
  goldPerSecond: number;
  jungleMinionsKilled: number;
  level: number;
  minionsKilled: number;
  participantId: number;
  position: PositionDto;
  timeEnemySpentControlled: number;
  totalGold: number;
  xp: number;
};

export type ChampionStatsDto = {
  abilityHaste: number;
  abilityPower: number;
  armor: number;
  armorPen: number;
  armorPenPercent: number;
  attackDamage: number;
  attackSpeed: number;
  bonusArmorPenPercent: number;
  bonusMagicPenPercent: number;
  ccReduction: number;
  cooldownReduction: number;
  health: number;
  healthMax: number;
  healthRegen: number;
  lifesteal: number;
  magicPen: number;
  magicPenPercent: number;
  magicResist: number;
  movementSpeed: number;
  omnivamp: number;
  physicalVamp: number;
  power: number;
  powerMax: number;
  powerRegen: number;
  spellVamp: number;
};

export type DamageStatsDto = {
  magicDamageDone: number;
  magicDamageDoneToChampions: number;
  magicDamageTaken: number;
  physicalDamageDone: number;
  physicalDamageDoneToChampions: number;
  physicalDamageTaken: number;
  totalDamageDone: number;
  totalDamageDoneToChampions: number;
  totalDamageTaken: number;
  trueDamageDone: number;
  trueDamageDoneToChampions: number;
  trueDamageTaken: number;
};

export type PositionDto = {
  x: number;
  y: number;
};

export type EventDto = {
  type: string;
}
  //PauseStartEventDto |
  //PauseEndEventDto |
  //LevelUpEventDto |
  //SkillLevelUpEventDto |
  //ItemPurchasedEventDto |
  //ItemUndoEventDto |
  //ItemDestroyedEventDto |
  //WardPlacedventDto |
  //WardKillEventDto |
  //ChampionKillEventDto |
  //KillFirstBloodEventDto |
  //KillMultiEventDto
;

export type PauseStartEventDto = {
  realTimestamp: number;
  timestamp: number;
  type: "PAUSE_START";
};

export type PauseEndEventDto = {
  realTimestamp: number;
  timestamp: number;
  type: "PAUSE_END";
};

export type LevelUpEventDto = {
  level: number;
  participantId: number;
  timestamp: number;
  type: "LEVEL_UP";
};

export type SkillLevelUpEventDto = {
  levelUpType: string;
  participantId: number;
  skillSlot: number;
  timestamp: number;
  type: "SKILL_LEVEL_UP";
}

export type ItemPurchasedEventDto = {
  itemId: number;
  participantId: number;
  timestamp: number;
  type: "ITEM_PURCHASED";
};

export type ItemUndoEventDto = {
  afterId: number;
  beforeId: number;
  goldGain: number;
  participantId: number;
  timestamp: number;
  type: "ITEM_UNDO";
}

export type WardPlacedventDto = {
  creatorId: number;
  timestamp: number;
  type: "WARD_PLACED";
  wardType: string;
};

export type WardKillEventDto = {
  killerId: number;
  timestamp: number;
  type: "WARD_KILL";
  wardType: string;
};

export type ItemDestroyedEventDto = {
  itemId: number;
  participantId: number;
  timestamp: number;
  type: "ITEM_DESTROYED";
};

export type ChampionKillEventDto = {
  assistingParticipantIds: number[];
  bounty: number;
  killStreakLength: number;
  killerId: number;
  position: PositionDto;
  shutdownBounty: number;
  timestamp: number;
  type: "CHAMPION_KILL";
  victimDamageDealt: DamageDto[];
  victimDamageReceived: DamageDto[];
  victimId: number;
};

export type DamageDto = {
  basic: boolean;
  magicDamage: number;
  name: string;
  participantId: number;
  physicalDamage: number;
  spellName: string;
  spellSlot: number
  trueDamage: number;
  type: string;
};

export type KillFirstBloodEventDto = {
  killType: "KILL_FIRST_BLOOD";
  killerId: number;
  position: PositionDto;
  timestamp: number;
  type: "CHAMPION_SPECIAL_KILL";
};

export type KillMultiEventDto = {
  killType: "KILL_MULTI";
  killerId: number;
  multiKillLength: number;
  position: PositionDto;
  timestamp: number;
  type: "CHAMPION_SPECIAL_KILL";
};

export default MatchTimelineDto;