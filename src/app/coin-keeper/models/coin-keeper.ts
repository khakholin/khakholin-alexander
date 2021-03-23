export interface ICoinKeeperCardHistory {
  comment: string;
  date: string;
  sum: string;
  type: string;
}

export interface ICoinKeeperCard {
  history: ICoinKeeperCardHistory[];
  styleClass: string;
  title: string;
  totalSum: string;
}
