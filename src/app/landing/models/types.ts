import { ESocialKeys, ETimelineTypes } from './enums';

export interface ITimelineItem {
  date: Date;
  skills?: string[];
  subtitle: string;
  title: string;
  type: ETimelineTypes;
}

export interface ISocialItem {
  iconClass: string;
  key: ESocialKeys;
  url: string;
}
