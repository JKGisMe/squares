/* jshint node: true */

module.exports = function(environment) {
  const ENV = {
    modulePrefix: 'squares',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    metricsAdapters: [
      {
        name: 'GoogleAnalytics',
        config: {
          id: 'UA-67543151-1'
        }
      },
      {
        name: 'Mixpanel',
        config: {
          token: 'afe41ad1fa5676d34782dbcd135d4168'
        }
      }
    ],

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.contentSecurityPolicy = {
      'default-src': "'none'",
      'script-src': "'self' http://www.google-analytics.com http://cdn.mxpnl.com",
      'font-src': "'self' https://fonts.gstatic.com",
      'connect-src': "'self' http://localhost:4000 http://api.mixpanel.com",
      'img-src': "'self' http://www.google-analytics.com https://stats.g.doubleclick.net data:",
      'style-src': "'self' 'unsafe-inline'",
      'media-src': "'self'",
      'object-src': "'self'",
      'frame-src': "'self'"
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
