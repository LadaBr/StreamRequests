export const environment = {
  production: true,
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
    backgroundColor: 'transparent',
    messageDuration: 30000,
    updateSpeed: 10000,
    buffer: 100,
    debug: {
      speed: 100,
      backgroundColor: '#0f0e11',
      updateSpeed: 10000,
      messageDuration: 1000,
      buffer: 100,
    }
  }
};
