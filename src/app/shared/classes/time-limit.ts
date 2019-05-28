import {ITimeLimit} from '../models/ITimeLimit';

export class TimeLimit implements ITimeLimit {
  constructor(min?: number, max?: number) {
    this.min = min;
    this.max = max;
  }
  max: number;
  min: number;
}
