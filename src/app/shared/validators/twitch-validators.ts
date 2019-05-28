import {Injectable} from '@angular/core';
import {AbstractControl, AsyncValidatorFn} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {TwitchService} from '../services/twitch.service';

@Injectable({
  providedIn: 'root'
})
export class TwitchValidators {
  constructor(private twitchService: TwitchService) {}

  channelValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return this.twitchService.getChannel(control.value).pipe(
        map(res => {
          return null;
        }),
        catchError(() => {
          return of({room: true});
        })
      );
    };
  }
  videoValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return this.twitchService.getVideo(control.value).pipe(
        map(res => {
          return null;
        }),
        catchError(() => {
          return of({video: true});
        })
      );
    };
  }
}
