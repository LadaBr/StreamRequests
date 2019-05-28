import {ITimeFragment} from '../models/ITimeFragment';
import {ITimeLimit} from '../models/ITimeLimit';

export class TimeFragment implements ITimeFragment {
  _value: number;
  public get value() {
    return this._value;
  }
  public set value(value: number) {
    this._value = this._validate(value);
  }
  constructor(value: number, public limit: ITimeLimit) {
    this.value = value;
  }
  _validate(value) {
    value = value ? value : 0;
    const min = this.limit.min !== undefined ? Math.max(this.limit.min, value) : value;
    return this.limit.max  !== undefined ? Math.min(min, this.limit.max) : value;
  }
}
