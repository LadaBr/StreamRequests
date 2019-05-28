// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  twitchApi: {
    auth: {
      url: 'https://id.twitch.tv/oauth2/authorize'
    },
    url: 'https://api.twitch.tv/v5/',
    clientId: 'zu6i9crsye9l7kwopfjhbmu8nt9q3y',
    twitchBadges: {
      url: 'https://badges.twitch.tv/v1/badges/'
    },
    kraken: {
      url: 'https://api.twitch.tv/kraken/',
    },
    old: {
      url: 'https://api.twitch.tv/api/'
    }
  },
  ffzApi: {
    url: 'https://api.frankerfacez.com/v1/'
  },
  betterTvApi: {
    url: 'https://api.betterttv.net/2/'
  },
  chatPlayer: {
    speed: 1,
    messageDuration: 5000,
    backgroundColor: 'transparent',
    updateSpeed: 10000,
    buffer: 100,
    debug: {
      speed: 1,
      backgroundColor: '#0f0e11',
      updateSpeed: 10000,
      messageDuration: 5000,
      buffer: 100,
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
