import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Logger {
  enabled: boolean;
  constructor() { }
  log(...value) {
    if (!this.enabled) return;
    console.log(...value);
  }

  error(...value) {
    if (!this.enabled) return;
    console.error(...value);
  }

  warn(...value) {
    if (!this.enabled) return;
    console.warn(...value);
  }
}
