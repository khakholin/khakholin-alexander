export interface ICoinKeeperCardHistory {
  comment: string;
  date: string;
  sum: string;
  subj: string;
}

export interface ICoinKeeperCard {
  history?: ICoinKeeperCardHistory[];
  styleClass: string;
  title: string;
  subTitle?: string;
  totalSum?: string;
}

export enum ECardTypes {
  SBER = 'SBER',
  ALFA_BANK = 'ALFA_BANK',
  GPB = 'GPB',
  OPEN = 'OPEN',
}
