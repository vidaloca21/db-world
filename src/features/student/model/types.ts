export type Student = {
  index: number;
  studentName: string;
  password: string;
  classGameBadge: string;
  classGameLevel: number;
  classGamexp: number;
  classGameCP: number;
  classGameStat: ClassGameStat;
  activeStatus: boolean;
};

export type ClassGameStat = {
  strength: number;
  agility: number;
  intelligence: number;
  luck: number;
};
